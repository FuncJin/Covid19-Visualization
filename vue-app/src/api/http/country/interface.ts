import type { Covid19Data } from '@api/interface'

/** 全国整体疫情数据 */
export type Country = {
    comment: string
    update_time: number
    data: Covid19Data
}
