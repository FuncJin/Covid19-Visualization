<template>
    <!-- 地图操作工具(add、sub) -->
    <el-amap-control-tool-bar @show="show" :position="{ top: '20px', right: '22px' }" />
</template>

<script lang="ts" setup>
import { inject, watch } from 'vue'

import constant from '@constant/index'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)

/** 加载完成后触发(onMounted) */
const show = () => {
    // 追加单击事件
    document
        .querySelector('span[class=amap-ctrl-zoomin][data-type=add]')!
        .setAttribute('title', i18nMap.body.amap.toolBar.add)
    document
        .querySelector('span[class=amap-ctrl-zoomout][data-type=sub]')!
        .setAttribute('title', i18nMap.body.amap.toolBar.sub)
}

// 切换语言时更新title
watch(i18nMap, () => show())
</script>
