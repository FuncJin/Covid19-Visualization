<template>
    <Transition appear>
        <div :class="`covid19-message ${props.isBoxShadow ? 'm-box-shadow' : ''}`" v-if="isOpen">
            <div class="m-title">
                <img :src="icons[props.type]" />
                <p>{{ props.title }}</p>
            </div>
            <p class="m-content">{{ props.content }}</p>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import success from '@assets/imgs/success.png'
import warn from '@assets/imgs/warning.png'

type Props = {
    title: string
    content: string
    dur: number
    isBoxShadow: boolean
    type?: 'success' | 'warn'
}

const icons = { success, warn }

const props = withDefaults(defineProps<Props>(), { type: 'success' })

const isOpen = ref(true)

onMounted(() => {
    setTimeout(() => {
        isOpen.value = false
    }, props.dur - 500)
})
</script>

<style lang="less" scoped>
.covid19-message {
    width: 300px;
    border-radius: 8px;
    position: fixed;
    bottom: 80px;
    left: 20px;
    padding: 25px;
    color: var(--text-title-color);
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity 0.5s;
    .m-title {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        img {
            width: 24px;
            height: 24px;
            margin-right: 15px;
        }
        p {
            font-size: 16px;
        }
    }
    .m-content {
        padding-left: 39px;
        opacity: 0.8;
    }
}
.m-box-shadow {
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.v-enter-active {
    animation: bounce-in 0.5s;
}
.v-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
