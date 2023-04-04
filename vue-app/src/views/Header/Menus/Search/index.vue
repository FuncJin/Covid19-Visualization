<template>
    <div class="covid19-search-input">
        <input
            type="text"
            :placeholder="
                props.progress >= 3 ? i18nMap.header.search.placeholder : i18nMap.header.search.loading(props.progress)
            "
            v-model="search.content"
            @input="change"
            @blur="blur"
        />
        <template v-if="search.result.length">
            <ul class="s-i-tip">
                <li v-for="item of search.result" :key="item.adcode" @click.stop="toDataPanel(item)">
                    {{ item.name }}
                </li>
            </ul>
        </template>
        <template v-if="search.empty">
            <p class="s-i-tip s-i-tip-empty">
                <span>{{ i18nMap.header.search.emptyTip }}</span>
            </p>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { inject, reactive } from 'vue'

import pubsub from '@utils/pubsub'
import constant from '@constant/index'

import type { Covid19ProvOrCityData } from '@api/interface'

type Props = { progress: number }

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const provCities = inject(injectionKey.PROVCITIES, defaultValue.provCities)
const props = defineProps<Props>()

const search = reactive({
    /** 搜索内容 */
    content: '',
    /** 搜索结果 */
    result: [] as Covid19ProvOrCityData[],
    /** 是否为空 */
    empty: false
})

/** 负责在数据面板中展示当前地区的疫情数据 */
const toDataPanel = (area: Covid19ProvOrCityData) => {
    // 更换数据
    pubsub.publish('searchAreaData', area)
    blur()
}
/** 卸载搜索提示面板 */
const blur = (e?: any) => {
    // 是否是在输入框以外触发
    if (e && !e?.relatedTarget) return
    search.content = ''
    search.empty = false
    search.result = []
}
const change = () => {
    // 数据为空的情况
    if (!search.content) return blur()
    /** 本次搜索结果 */
    const areaArr = [] as Covid19ProvOrCityData[]
    /** 在所有省、市级下进行遍历 */
    provCities.forEach((a) => {
        /** 精确匹配 */
        const exact = new RegExp(search.content).test(a.name)
        /** 模糊匹配的正则 */
        const _reg = search.content.replace(/.{1}/g, (c) =>
            c === search.content[search.content.length - 1] ? c : `${c}|`
        )
        const indistinct = new RegExp(_reg).test(a.name)
        // 精确匹配(精确匹配到的关键词，将始终排在第一位)
        if (exact) return areaArr.unshift(a)
        // 模糊匹配
        if (indistinct) areaArr.push(a)
    })
    search.result = areaArr
    search.empty = !areaArr.length
}
</script>

<style lang="less" scoped>
.covid19-search-input {
    height: 100%;
    position: relative;
    z-index: 197;
    input {
        width: 100%;
        height: 100%;
        padding-left: 15px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        box-sizing: border-box;
        color: var(--text-search-color);
        background-color: var(--search-bg-color);
        transition: outline 0.5s;
        &:focus {
            outline: 1px solid var(--border-search-color);
        }
    }
    .s-i-tip {
        width: 100%;
        max-height: 300px;
        padding: 3px 0;
        border-radius: 5px;
        border: 1px solid red;
        position: absolute;
        top: 115%;
        left: 0;
        overflow-y: auto;
        font-size: 14px;
        border: 1px solid var(--border-color);
        color: var(--text-title-color);
        background-color: var(--bg-color);
        cursor: default;
        li {
            padding: 10px 15px;
            &:hover {
                color: var(--bg-color);
                background-color: var(--text-title-color);
            }
        }
    }
    .s-i-tip-empty {
        padding: 10px;
        font-size: 16px;
        box-sizing: border-box;
        text-align: center;
        span {
            color: var(--text-search-color);
            opacity: 0.6;
        }
    }
}
</style>
