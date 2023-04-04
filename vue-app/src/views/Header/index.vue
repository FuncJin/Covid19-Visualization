<template>
    <section class="covid19-theme-transition-bg-tcolor covid19-header">
        <h1 class="h-title">{{ i18nMap.title }}</h1>
        <div class="covid19-theme-transition-bg h-search">
            <Search :progress="props.progress" />
        </div>
        <ul class="h-list">
            <li class="h-l-title">
                {{ i18nMap.header.menus.title }}
                <ul class="h-l-t-extends">
                    <li v-for="(text, key) of moreOptions" :key="key" @click="proxy(text(), key)">
                        {{ text() }}
                    </li>
                </ul>
            </li>
            <li class="h-l-title h-l-line">|</li>
            <li class="h-l-title h-l-github">
                <a class="covid19-theme-transition-text-color" href="https://github.com/FuncJin" target="_blank"
                    >GitHub</a
                >
            </li>
        </ul>
    </section>
    <Drawer :isOpen="isOpen" :title="drawerTitle" @close="close">
        <component :is="curDrawer" @close="close"></component>
    </Drawer>
</template>

<script lang="ts" setup>
import { ref, inject, reactive } from 'vue'

import Drawer from '@components/Drawer'

import Signature from '@views/Header/Menus/Signature'
import I18n from '@views/Header/Menus/I18n'
import MapStyle from '@views/Header/Menus/MapStyle'
import Search from '@views/Header/Menus/Search'

import constant from '@constant/index'

type Props = { progress: number }

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const props = defineProps<Props>()

const menusComponents = [Signature, MapStyle, I18n]

/** 当前抽屉 */
const curDrawer = ref()
/** 抽屉的开关状态 */
const isOpen = ref(false)
/** 抽屉标题 */
const drawerTitle = ref('')
/** 要渲染的选项 */
const moreOptions = reactive([
    () => i18nMap.header.menus.signature.title,
    () => i18nMap.header.menus.style.title,
    () => i18nMap.header.menus.i18n.title
] as const)

/** 控制应弹出哪个抽屉 */
const proxy = (title: string, key: number) => {
    isOpen.value = true
    drawerTitle.value = title
    curDrawer.value = menusComponents[key]
}
/** 关闭抽屉 */
const close = () => (isOpen.value = false)
</script>

<style lang="less" scoped>
.covid19-header {
    width: 85%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-title-color);
    background-color: var(--bg-color);
    .h-title {
        font-size: 38px;
    }
    .h-search {
        flex: 2;
        height: 55px;
        padding: 0px 70px;
    }
    .h-list {
        .h-l-title {
            font-size: 16px;
            font-weight: 700;
            float: left;
            padding: 10px 12px;
            position: relative;
            cursor: default;
            a {
                color: var(--text-title-color);
            }
            &:hover {
                .h-l-t-extends {
                    height: 140px;
                    padding: 5px;
                }
            }
            .h-l-t-extends {
                width: 110%;
                height: 0;
                border-radius: 4px;
                position: absolute;
                top: calc(100% + 3px);
                left: -5%;
                text-align: center;
                z-index: 197;
                overflow: hidden;
                box-sizing: border-box;
                transition: height 0.3s;
                opacity: 0.9;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                color: var(--text-title-color);
                background-color: var(--bg-color);
                li {
                    width: 100%;
                    padding: 8px 0;
                    font-size: 12px;
                    border-radius: 5px;
                    &:hover {
                        color: var(--bg-color);
                        background-color: var(--text-title-color);
                    }
                }
            }
        }
    }
    .h-l-line {
        width: 3px;
        height: 80%;
        color: rgb(216, 100, 34);
    }
}
</style>
