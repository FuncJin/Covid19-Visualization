import database from '../../index'

import type { Covid19ProvinceData, Covid19ProvinceDataSelect } from './interface'

const { sqlOperations } = database

/** 插入 */
const insert = (empty: unknown, data: Covid19ProvinceData) => {
    const { name, update_time, adcode, comment, data: _data, cities } = data
    const _column = 'name, update_time, adcode, comment, data, cities'
    const _values = `'${name}', '${update_time}', '${adcode}', '${comment}', '${JSON.stringify(
        _data
    )}', '${JSON.stringify(cities)}'`
    return sqlOperations(`insert into province (${_column}) values (${_values})`)
}

/** 更新 */
const update = (pName: string, data: Covid19ProvinceData) => {
    const { name, update_time, adcode, comment, data: _data, cities } = data
    const _values = `name='${name}', update_time='${update_time}', adcode='${adcode}', comment='${comment}', data='${JSON.stringify(
        _data
    )}',cities='${JSON.stringify(cities)}'`
    return sqlOperations(`update province set${_values} where name='${pName}'`)
}

/** 根据指定条件来获取单行记录 */
const where: Covid19ProvinceDataSelect = async (name, type) => {
    const data = await sqlOperations(`select ${type} from province where name='${name}'`)
    let _tData = data ? data[type] : data
    if (type === 'update_time') _tData = Number(_tData)
    if (type === 'data') _tData = _tData ? JSON.parse(_tData) : {}
    if (type === 'cities') _tData = _tData ? JSON.parse(_tData) : []
    return _tData
}

/** 获取全部记录 */
const all = async (): Promise<Covid19ProvinceData[]> => {
    const data = await sqlOperations<Covid19ProvinceData[]>(`select * from province`, true)
    return data.map((row) => {
        row.update_time = Number(row.update_time)
        row.data = JSON.parse(row.data as unknown as string)
        row.cities = JSON.parse(row.cities as unknown as string)
        return row
    })
}

/** 获取全部记录的某几列 */
const whichColumn = <T = any>(c: (keyof Covid19ProvinceData)[]) =>
    sqlOperations<T>(`select ${c.join(',')} from province`, true)

const data = {
    insert,
    update,
    select: {
        where,
        all,
        whichColumn
    }
}

export default data
