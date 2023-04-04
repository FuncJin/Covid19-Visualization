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

/** 对于当前地区(国家/省份/市级)的疫情数据备注说明 */
export type Covid19DetailsByData = {
    /** covid19的备注 */
    comment: string
    /** 最后更新时间 */
    update_time: number
}
