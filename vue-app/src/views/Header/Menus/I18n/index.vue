<template>
    <div class="i18n">
        <p class="i18n-title">{{ i18nMap.header.menus.i18n.text1 }}</p>
        <ul class="i18n-list">
            <li v-for="(item, key) of options" :key="key" @click="switchLang(item.lang)" :title="item.title">
                {{ item.text }}
            </li>
        </ul>
        <p class="covid19-drawer-footer">
            {{ i18nMap.header.menus.i18n.text3 }}
            <br />
            <br />
            {{ i18nMap.header.menus.i18n.text2 }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { inject, nextTick } from 'vue'

import i18nUtils from '@utils/i18n'
import message from '@utils/message'
import constant from '@constant/index'

import type { ForceLang } from '@utils/i18n/interface'

type Emits = { (t: 'close'): void }

const { injectionKey, defaultValue } = constant

const emits = defineEmits<Emits>()
const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const forceLang = inject(injectionKey.FORCELANG, defaultValue.forceLang)

const options = [
    /** 法语 */
    { title: 'Basculer en français', lang: 'fr', text: 'français' },
    /** 韩语 */
    { title: '한국어로 전환', lang: 'ko', text: '한어' },
    /** 日语 */
    { title: '日本語に切り替え', lang: 'jp', text: '日本語' },
    /** 英语 */
    { title: 'switch to english', lang: 'en', text: 'English' },
    /** 简体中文 */
    { title: '切换为简体中文', lang: 'zh_cn', text: '简体中文' },
    /** 繁体中文 */
    { title: '切換爲繁體中文', lang: 'zh_hk', text: '繁體中文' }
] as const

/** 切换语种 */
const switchLang: ForceLang = (lang) => {
    const _lang = () => i18nMap.header.menus.i18n.globalMsg
    if (i18nUtils.lang() === lang)
        return message({
            title: _lang().warn.title,
            content: _lang().warn.content,
            type: 'warn'
        })
    // 切换成功
    i18nUtils.setLang(lang)
    emits('close')
    forceLang(lang)
    nextTick(() => {
        // 在下轮dom更新后触发，否则会出现当前所展示的语言依然为上一次选择的语言
        message({
            title: _lang().success.title,
            content: _lang().success.content
        })
    })
}
</script>

<style lang="less" scoped>
.i18n {
    height: 100%;
    .i18n-title {
        font-size: 16px;
        margin-bottom: 15px;
        color: var(--text-title-color);
    }
    .i18n-list {
        padding-left: 20px;
        margin-bottom: 15px;
        list-style-type: square;
        li {
            padding: 7px;
            border-radius: 5px;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            color: var(--text-title-color);
            &:hover {
                color: var(--bg-color);
                background-color: var(--text-title-color);
            }
        }
    }
}
</style>
