<template>
    <!-- 重置地图缩放等级 -->
    <img class="covid19-amap-reset" :src="icon" @click="reset()" :title="i18nMap.body.amap.resetPos.tip" />
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import constant from '@constant/index'

import icon from '@assets/imgs/amap_reset.png'

type Emits = {
    (e: 'reset'): void
}

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const emits = defineEmits<Emits>()

const reset = () => emits('reset')
</script>

<style lang="less" scoped>
.covid19-amap-reset {
    cursor: pointer;
}
</style>
