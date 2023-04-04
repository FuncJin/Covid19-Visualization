import type { ECOption } from '@components/Echarts/interface'
import type { PieData } from './interface'

/** 绘制饼图的通用配置项 */
const getOption = ({ text, values: [co, su, cu, de], i18nMap, moreSeries }: PieData) =>
    ({
        title: {
            text,
            bottom: 10,
            right: 10,
            textStyle: {
                textBorderWidth: 0
            }
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                ...moreSeries,
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    color: '#ccc'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold'
                    }
                },
                data: [
                    // 累计确诊人数
                    {
                        value: co ? co : null,
                        name: i18nMap.body.ncov.data.text1,
                        area: text,
                        itemStyle: { color: 'rgb(255,182,0)' }
                    },
                    // 疑似感染人数
                    {
                        value: su ? su : null,
                        name: i18nMap.body.ncov.data.text2,
                        area: text,

                        itemStyle: { color: 'rgb(0, 147, 213)' }
                    },
                    // 治愈人数
                    {
                        value: cu ? cu : null,
                        name: i18nMap.body.ncov.data.text3,
                        area: text,

                        itemStyle: { color: 'rgb(15, 155, 56)' }
                    },
                    // 死亡人数
                    {
                        value: de ? de : null,
                        name: i18nMap.body.ncov.data.text4,
                        area: text,
                        itemStyle: { color: 'rgb(216, 100, 34)' }
                    }
                ]
            }
        ]
    } as ECOption)

export default getOption
