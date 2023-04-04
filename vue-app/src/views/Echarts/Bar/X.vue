<template>
    <Echarts :className="'covid19-echarts-bar-x'" :option="option" @click="click" />
</template>

<script lang="ts" setup>
import { watch, inject, reactive } from 'vue'

import Echarts from '@components/Echarts'

import constant from '@constant/index'
import isMobileOrIpad from '@utils/currentDevice'
import pubsub from '@utils/pubsub'
import tooltipUlDom from './utils'

import type { PropType } from 'vue'

import type { Covid19ProvOrCityData } from '@api/interface'
import type { CustomKeysByObject } from '@interface/index'
import type { ECOption } from '@components/Echarts/interface'
import type { EchartsBarEventParams } from './interface'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const props = defineProps({
    province: {
        type: Object as PropType<Map<string, Covid19ProvOrCityData>>,
        required: true
    },
    name: { type: Array as PropType<string[]>, required: true },
    values: { type: Array as PropType<number[]>, required: true }
})

const option = reactive<ECOption>({})

const click = ({ name }: EchartsBarEventParams) => pubsub.publish('searchAreaData', props.province.get(name)!)

watch(props, (props) => {
    const _option = {
        grid: {
            x: isMobileOrIpad() ? 50 : 100,
            y: 0,
            x2: 0,
            y2: 0
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: props.name
        },
        tooltip: {
            trigger: 'item',
            formatter: (params: CustomKeysByObject<'name'>) =>
                tooltipUlDom(i18nMap, props.province.get(params.name)!.data),
            padding: 0,
            borderRadius: 7
        },
        series: [
            {
                data: props.values,
                type: 'bar',
                barMinHeight: 5
            }
        ]
    }
    Object.assign(option, _option)
})
</script>

<style lang="css" scoped>
.covid19-echarts-bar-x {
    height: 1800px;
    margin-bottom: 60px;
}
</style>
