<template>
    <div :class="props.className" ref="ec"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

import intersectionObserver from '@utils/intersectionObserver'
import echarts from './echarts'

import type { ECOption } from './interface'

type Props = {
    className: string
    option: ECOption
}
type Emits = {
    (e: 'click', params: any): void
    (e: 'update', option: ECOption): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const ec = ref()

/** 当前echart实例 */
let echart = null as any

watch(props, (props) => intersectionObserver(`.${props.className}`, () => echart.setOption(props.option)))

onMounted(() => {
    echart = echarts.init(ec.value)
    echart.on('click', (params: unknown) => emits('click', params))
})
</script>
