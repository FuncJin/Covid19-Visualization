<template>
    <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-details">
        <li>
            <p class="n-d-title">{{ area }}</p>
            <p class="n-d-comments">{{ i18nMap.body.ncov.details.text1 }}</p>
        </li>
        <li>
            <p class="n-d-title">{{ time }}</p>
            <p class="n-d-comments">{{ i18nMap.body.ncov.details.text2 }}</p>
        </li>
        <template v-if="comment">
            <li class="n-d-comments-last">
                <p>{{ comment }}</p>
            </li>
        </template>
    </ul>
    <ul class="covid19-theme-transition-bg-tcolor covid19-data-panel ncov-data">
        <li>
            <p class="covid19-theme-transition-text-color n-d-title covid19-data-confirmedCount">
                <SwitchContent :text="confirmedCount" />
            </p>
            <p class="covid19-theme-transition-text-color n-d-comments">
                {{ i18nMap.body.ncov.data.text1 }}
            </p>
        </li>
        <li>
            <p class="n-d-title covid19-data-suspectedCount">
                <SwitchContent :text="suspectedCount" />
            </p>
            <p class="covid19-theme-transition-text-color n-d-comments">
                {{ i18nMap.body.ncov.data.text2 }}
            </p>
        </li>
        <li>
            <p class="n-d-title covid19-data-curedCount">
                <SwitchContent :text="curedCount" />
            </p>
            <p class="covid19-theme-transition-text-color n-d-comments">
                {{ i18nMap.body.ncov.data.text3 }}
            </p>
        </li>
        <li>
            <p class="n-d-title covid19-data-deadCount">
                <SwitchContent :text="deadCount" />
            </p>
            <p class="covid19-theme-transition-text-color n-d-comments">
                {{ i18nMap.body.ncov.data.text4 }}
            </p>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, inject, watch } from 'vue'

import SwitchContent from '@components/SwitchContent'

import pubsub from '@utils/pubsub'
import message from '@utils/message'
import timeUtils from '@utils/time'
import numMethods from '@utils/numMethods'
import constant from '@constant/index'

import type { SearchAreaDataType } from '@utils/pubsub/interface'

type PanelCounts = string | number

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const country = inject(injectionKey.COUNTRY, defaultValue.country)

/** 当前数据面板中正在展示的地区 */
let curShowDataPanelArea = ''

const confirmedCount = ref<PanelCounts>('0')
const suspectedCount = ref<PanelCounts>('0')
const curedCount = ref<PanelCounts>('0')
const deadCount = ref<PanelCounts>('0')

const area = ref('地区')
const time = ref('时间')
const comment = ref('暂无备注说明')

/** 更新面板中的疫情和地区数据 */
const updateData = (_data: SearchAreaDataType) => {
    const { name, update_time, data, isMsg } = _data
    // 更新疫情数据
    confirmedCount.value = numMethods.thousands(data.confirmed_count)!
    suspectedCount.value = numMethods.thousands(data.suspected_count)!
    curedCount.value = numMethods.thousands(data.cured_count)!
    deadCount.value = numMethods.thousands(data.dead_count)!
    // 更新地区数据
    area.value = name
    time.value = timeUtils.getDateText(update_time)
    comment.value = _data.comment
    // 在地图中高亮该地区
    pubsub.publish('highArea', _data.adcode)
    // 初始化时不进行消息提示
    if (name === '全国') return
    // 是否不进行消息提示(默认进行消息提示)
    if (isMsg === false) return
    // 消息提示
    const lang = () => i18nMap.body.amap.showPanelData.globalMsg
    if (curShowDataPanelArea === name)
        return message({
            title: lang().warn.title,
            content: lang().warn.content(name),
            type: 'warn'
        })
    message({
        title: lang().success.title,
        content: lang().success.content(name)
    })
    // 记录当前地区
    curShowDataPanelArea = name
}

// 默认展示全国整体疫情数据
watch(country, (c) => updateData({ ...c, name: '全国', adcode: '100000' }))

pubsub.subscribe('searchAreaData', (_, data) => updateData(data))
</script>

<style lang="less" scoped>
.ncov-details {
    padding: 5px 0 0 0 !important;
    min-height: 120px;
    li {
        padding: 5px 10px;
    }
    .n-d-title {
        font-size: 20px;
    }
    .n-d-comments-last {
        opacity: 0.75;
        font-size: 12px;
        color: var(--text-comments-color);
        border-top: 1px solid var(--border-color);
        p {
            transform: scale(0.9);
            animation: bounce-comments-last 0.35s;
        }
    }
}
.ncov-data {
    height: 260px;
    align-items: flex-end;
    .n-d-title {
        height: 35px;
        font-size: 26px;
        text-align: end;
    }
    .n-d-comments {
        text-align: end;
    }
}
@keyframes bounce-comments-last {
    0% {
        margin-top: -15px;
        opacity: 0;
    }
    100% {
        margin-top: 0;
        opacity: 1;
    }
}
</style>
