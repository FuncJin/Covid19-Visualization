<template>
    <div class="ncov-map-style">
        <p class="covid19-theme-transition-text-color n-m-s-title">
            {{ i18nMap.header.menus.style.text1 }}
        </p>
        <ul class="">
            <li v-for="(item, key) of i18nMap.header.menus.style.scheme" :key="key" @click="switchStyle(key)">
                <span>{{ item }}</span>
                <span v-if="order === key">√</span>
            </li>
        </ul>
        <p class="covid19-theme-transition-text-color covid19-drawer-footer">
            {{ i18nMap.header.menus.style.text2 }}
            <br />
            <br />
            {{ i18nMap.header.menus.style.text3 }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'

import pubsub from '@utils/pubsub'
import storage from '@utils/storage'
import constant from '@constant/index'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)

/** 用户之前选择好的地图样式(临时) */
const _order = storage.getItem('theme_order')
/** 高德地图官方主题 */
const _mapStyle = ['normal', 'macaron', 'whitesmoke', 'dark', 'fresh', 'darkblue', 'blue', 'light', 'grey']

/** 当前选择的主题编号(临时) */
const order = ref(_order ? Number(_order) : 0)

/** 切换主题 */
const switchStyle = (key: number) => {
    // 记录下本次的key(临时)
    order.value = key
    storage.setItem('theme_order', String(key))
    // 切换主题
    pubsub.publish('switchStyle', _mapStyle[key])
}
</script>

<style lang="less" scoped>
.ncov-map-style {
    .n-m-s-title {
        font-size: 16px;
        margin-bottom: 10px;
    }
    ul {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        li {
            padding: 10px;
            padding-left: 10px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:hover {
                color: var(--bg-color);
                background-color: var(--text-title-color);
            }
        }
    }
}
</style>
