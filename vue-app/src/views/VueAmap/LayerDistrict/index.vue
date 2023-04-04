<template>
    <Marker :mark="mark" />
    <template v-for="(item, key) of zoningPlan" :key="key">
        <!-- 行政区划 -->
        <el-amap-layer-district type="Country" :adcode="item.adcode" :styles="{ fill: item.fill }" @click="click" />
    </template>
</template>

<script lang="ts" setup>
import { ref, inject, watch, reactive } from 'vue'

import Marker from '@views/VueAmap/Marker'

import constant from '@constant/index'
import pubsub from '@utils/pubsub'
import amapUtils from '@utils/amap'
import getColorGradeByCovid19Data from './grade'

/** 行政区域划分填充的数据 */
type LayerDistrict = {
    adcode: string
    fill: string
}
/** 单击区域面时的事件参数 */
type LayerDistrictClickEvent = {
    props?: {
        NAME_CHN: string
        adcode: number
        x: number
        y: number
    }
}

const { injectionKey, defaultValue } = constant

const province = inject(injectionKey.PROVINCE, defaultValue.province)

/** 上次被点击的地区 */
let preAdcode = -1
const defaultMark = () => ({
    name: '',
    counts: 0,
    position: [0, 0]
})

/** 省级行政区域划分相关数据 */
const zoningPlan = ref<LayerDistrict[]>([])
/** 点标记数据 */
const mark = reactive(defaultMark())

/** 根据行政区域绘制疫情数据 */
const highArea = (adcode?: string) => {
    /** 当前要高亮的地区(点) */
    const _mark = defaultMark()
    // 高亮地区
    zoningPlan.value = province.map((d, order) => {
        if (d.adcode === adcode) {
            _mark.name = d.name
            _mark.counts = d.data.confirmed_count
            _mark.position = amapUtils.pos[order]
        }
        return {
            name: d.name,
            counts: d.data.confirmed_count,
            position: amapUtils.pos[order],
            adcode: d.adcode,
            // 是否高亮当前地区
            fill: String(adcode) !== d.adcode ? getColorGradeByCovid19Data(d.data.confirmed_count) : '#ffb600',
            _data: d
        }
    })
    // 绘制点
    Object.assign(mark, _mark)
}
const click = (e: LayerDistrictClickEvent) => {
    if (!e?.props?.adcode) return
    const { adcode } = e.props
    if (preAdcode === adcode) return
    // 找出当前单击的地区
    const curArea = province.find((a) => a.adcode === String(adcode))
    if (!curArea) return
    // 记录当前地区
    preAdcode = adcode
    // 在数据面板中展示数据
    pubsub.publish('searchAreaData', curArea)
}

watch(province, () => highArea())

pubsub.subscribe('highArea', (_, adcode) => highArea(adcode))
</script>
