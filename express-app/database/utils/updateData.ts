import httpApi from '../../api'

import chinaSqlApi from '../sql/china'
import provinceSqlApi from '../sql/province'
import province from '../province'

import utils from '../../utils'

import type { Covid19Data } from '../sql/interface'
import type { Covid19ChinaData } from '../sql/china/interface'
import type { Covid19ProvinceData } from '../sql/province/interface'
import type { CustomKeysByObject, CustomValuesByObject } from '../../interfaces'

type LocationId = { locationId: number }
type PublicKeys = 'confirmedCount' | 'suspectedCount' | 'curedCount' | 'deadCount' | 'updateTime'

const {
    stringMethods: { transformHump },
    interval
} = utils

/** 公共字段 */
const publicKeys = [
    ['confirmedCount', 0],
    ['suspectedCount', 0],
    ['curedCount', 0],
    ['deadCount', 0],
    ['updateTime', 0]
] as const

/** 国家字段 */
const chinaKeys = [...publicKeys, ['comment', '']] as const

/**
 * 映射省级/市级的疫情数据格式
 *
 * 注意，各直辖市疫情数据的最后更新时间全部使用其省会城市的更新时间
 */
const getProvinceValueByObject = (obj: CustomValuesByObject, update_time: number) => {
    const result = { data: {} } as Covid19ProvinceData
    for (let i = 0, len = publicKeys.length; i < len; i++)
        result.data[transformHump(publicKeys[i][0]) as keyof Covid19Data] = obj[publicKeys[i][0]]
    // 补齐name
    if (obj.cityName) {
        // 直辖市的情况下，补齐comment
        result.comment = ''
        result.name = obj.cityName
    } else {
        delete (result.data as any).update_time
        // 省份名称使用其简写形式(例如山东省->山东)
        result.name = obj.provinceShortName
    }
    // 补齐adcode
    result.adcode = String(obj.locationId)
    return { ...result, update_time } as Covid19ProvinceData
}

/** 更新国家疫情数据 */
const chinaData = async () => {
    const { results } = await httpApi.ncov(`/area?latest=1&province=${encodeURI('中国')}`)
    const [data] = results
    /** 之前是否已缓存过数据 */
    const preUpdateTime = await chinaSqlApi.select.whereColumn('update_time')
    /** 本次请求回来的新数据与上次是否相同 */
    if (preUpdateTime === data.updateTime) return
    /** 当前的执行动作是更新还是插入 */
    const _update = preUpdateTime ? chinaSqlApi.update : chinaSqlApi.insert
    const _sqlData = {} as Covid19ChinaData['insert']
    for (let i = 0, len = chinaKeys.length; i < len; i++) {
        const value = data[chinaKeys[i][0]]
        _sqlData[transformHump(chinaKeys[i][0]) as keyof Covid19Data] = value ? value : chinaKeys[i][1]
    }
    await _update(_sqlData)
}

/** 更新省份疫情数据 */
const provinceData = async () => {
    const func = async (i: number) => {
        /** 按照固定的省份名称进行请求 */
        const name: any =
            typeof province[i] === 'string'
                ? { p: province[i], n: (province[i] as string).slice(0, (province[i] as string).length - 1) }
                : province[i]
        const { results } = await httpApi.ncov(`/area?latest=1&province=${encodeURI(name.p)}`)
        const [data] = results
        /** 之前是否已缓存过数据 */
        const preUpdateTime = await provinceSqlApi.select.where(name.n, 'update_time')
        /** 本次请求回来的新数据与上次是否相同 */
        if (preUpdateTime === data.updateTime) return
        /** 当前的执行动作是更新还是插入 */
        const _update = preUpdateTime ? provinceSqlApi.update : provinceSqlApi.insert
        // 更新省级数据
        const _proviceSqlData = getProvinceValueByObject(data, data.updateTime)
        // @ts-ignore
        const _sqlData = { comment: data.comment, ..._proviceSqlData } as Covid19ProvinceData
        // 更新直辖市的疫情数据
        const _cities = data.cities ? data.cities : []
        _sqlData.cities = _cities
            .filter((info: LocationId) => info.locationId > 0)
            .map((v: CustomKeysByObject<PublicKeys>) => getProvinceValueByObject(v, data.updateTime))
        _update(name.n, _sqlData)
    }
    interval({ max: province.length, func })
}

const queue = [chinaData, provinceData]

/**
 * 更新国家、省份的疫情数据表
 *
 * 用于系统重启、数据库改变、数据库初始化、定时更新数据等场景
 */
const updateData = () => queue.forEach((f) => f())

export default updateData
