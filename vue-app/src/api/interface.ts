/** 疫情数据的基本格式 */
export type Covid19Data = {
    /** 累计确诊人数 */
    confirmed_count: number
    /** 疑似感染人数 */
    suspected_count: number
    /** 治愈人数 */
    cured_count: number
    /** 死亡人数 */
    dead_count: number
}

/** 省/市级疫情数据说明 */
export type Covid19DetailsByAreaData = {
    /** 名称 */
    name: string
    /** 邮政编码 */
    adcode: string
    /** 最后更新时间 */
    update_time: number
    /** 备注 */
    comment: string
}

/** 省/市级的疫情数据 */
export type Covid19ProvOrCityData = Covid19DetailsByAreaData & { data: Covid19Data }
