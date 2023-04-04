import type * as echarts from 'echarts/core'
import type { BarSeriesOption, PieSeriesOption } from 'echarts/charts'
import type {
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    LegendComponentOption,
    ToolboxComponentOption
} from 'echarts/components'

/** 按需加载的Echarts图表配置项类型 */
export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | PieSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | LegendComponentOption
    | ToolboxComponentOption
>
