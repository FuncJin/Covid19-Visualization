import type { LangMapType } from '@utils/i18n/interface'

type MoreSeries = {
    radius?: (string | number)[]
    stillShowZeroSum?: boolean
    roseType?: string
    minAngle?: number
}

/** 绘制饼图数据 */
export type PieData = {
    text: string
    values: number[]
    i18nMap: LangMapType
    /** 额外配置项 */
    moreSeries: MoreSeries
}

/** echarts饼图事件参数 */
export type EchartsPieEventParams = {
    data: { area: string }
}
