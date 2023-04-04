import type { Covid19Data, Covid19DetailsByData } from '../interface'

/** 省份疫情数据格式 */
type Covid19ProvinceDataPar = Covid19DetailsByData & {
    /** 省份名称 */
    name: string
    /** 省份邮政编码 */
    adcode: string
    /** 当前地区的累计确诊人数、疑似感染人数、治愈人数、死亡人数 */
    data: Covid19Data
}

/** 省份疫情数据格式(包含其直辖市) */
export type Covid19ProvinceData = Covid19ProvinceDataPar & {
    /** 该省份下的各直辖市疫情数据 */
    cities: Covid19ProvinceDataPar[]
}

/** 获取时的函数重载 */
export type Covid19ProvinceDataSelect = {
    (name: string, k: 'comment' | 'name' | 'adcode'): Promise<string>
    (name: string, k: 'update_time'): Promise<number>
    (name: string, k: 'data'): Promise<Covid19Data>
    (name: string, k: 'cities'): Promise<Covid19ProvinceData['cities']>
}
