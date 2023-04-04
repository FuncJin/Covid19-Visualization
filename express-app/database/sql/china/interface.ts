import type { Covid19Data, Covid19DetailsByData } from '../interface'

/** 国家疫情数据格式 */
export type Covid19ChinaData = {
    /** 写入时的格式 */
    insert: Covid19Data & Covid19DetailsByData
    /** 获取时的格式 */
    return: Covid19DetailsByData & { data: Covid19Data }
}

/** 获取时的函数重载 */
export type Covid19ChinaDataSelect = {
    (k: keyof Covid19Data | 'update_time'): Promise<number>
    (k: 'comment'): Promise<string>
}
