<template>
    <div class="covid19-echarts-pie-between">
        <Echarts
            v-for="(_, idx) of pieData"
            :className="`covid19-echarts-hollow-pie-${idx}`"
            :key="idx"
            :option="pieData[idx]"
            @click="click"
        />
    </div>
</template>

<script lang="ts" setup>
import { watch, inject, reactive } from 'vue'

import Echarts from '@components/Echarts'

import constant from '@constant/index'
import pubsub from '@utils/pubsub'
import getOption from './utils'

import type { PropType } from 'vue'

import type { Covid19ProvOrCityData } from '@api/interface'
import type { ECOption } from '@components/Echarts/interface'
import type { EchartsPieEventParams } from './interface'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const props = defineProps({
    province: {
        type: Object as PropType<Map<string, Covid19ProvOrCityData>>,
        required: true
    },
    values: {
        type: Object as PropType<Covid19ProvOrCityData[]>,
        required: true
    }
})

const pieData = reactive<ECOption[]>(Array.from({ length: 4 }))

const click = (p: unknown) =>
    pubsub.publish('searchAreaData', props.province.get((p as EchartsPieEventParams).data.area)!)

watch([props, i18nMap], ([props, i18nMap]) => {
    const _option: ECOption[] = []
    props.values.forEach((_, i) => {
        const values = [
            props.values[i].data.confirmed_count,
            props.values[i].data.suspected_count,
            props.values[i].data.cured_count,
            props.values[i].data.dead_count
        ]
        _option.push(
            getOption({
                text: props.values[i].name,
                values,
                i18nMap,
                moreSeries: {
                    radius: ['30%', '50%']
                }
            })
        )
    })
    Object.assign(pieData, _option)
})
</script>
