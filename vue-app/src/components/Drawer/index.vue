<template>
    <Transition name="drawer">
        <div class="covid19-drawer-mask" v-if="isOpen">
            <div class="d-m-body">
                <div class="d-m-b-header">
                    <p class="d-m-b-h-title">{{ props.title }}</p>
                    <button @click="cancelDrawer()">
                        {{ i18nMap.header.menus.btn1 }}
                    </button>
                </div>
                <div class="d-m-b-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, watch, inject } from 'vue'

import constant from '@constant/index'
import documentUtils from '@utils/document'

type Props = {
    isOpen: boolean
    title: string
}
type Emits = {
    (e: 'close'): void
}

const { injectionKey, defaultValue } = constant

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)

const isOpen = ref(props.isOpen)

watch(
    () => props.isOpen,
    (o) => {
        isOpen.value = o
        if (o) return documentUtils.scrollBar.hidden()
        documentUtils.scrollBar.show()
    }
)

/** 关闭抽屉 */
const cancelDrawer = () => emits('close')
</script>

<style lang="less">
.covid19-drawer-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 198;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.45);
    .d-m-body {
        width: 350px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        box-shadow: -6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12),
            -9px 0 28px 8px rgba(0, 0, 0, 0.05);
        color: var(--text-title-color);
        background-color: var(--bg-color);
        .d-m-b-header {
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid rgb(216, 100, 34);
            .d-m-b-h-title {
                font-size: 22px;
                font-weight: 300;
            }
            button {
                padding: 5px 10px;
                border-radius: 5px;
                border: none;
                color: var(--bg-color);
                background-color: var(--text-title-color);
            }
        }
        .d-m-b-content {
            flex: 2;
            padding: 10px;
            position: relative;
            overflow-y: auto;
            .d-m-b-c-header {
                height: 100%;
            }
            .covid19-drawer-footer {
                font-size: 12px;
                padding: 10px;
                position: absolute;
                bottom: 25px;
                left: 0;
            }
        }
    }
}
.drawer-enter-active,
.drawer-leave-active {
    transition: opacity 0.45s;
}
.drawer-enter-from,
.drawer-leave-to {
    opacity: 0;
}

.drawer-enter-active .d-m-body,
.drawer-leave-active .d-m-body {
    transition: right 0.4s;
}
.drawer-enter-from .d-m-body,
.drawer-leave-to .d-m-body {
    right: -100%;
}
</style>
