<template>
    <Transition name="bg-img">
        <section class="covid19-bg-img" v-if="isShowBg">
            <img :src="currentDevice() ? covid19SmallImg : covid19LargeImg" @load="load" />
            <div class="c-v-center" v-if="isLoading">
                <div class="c-v-loading"></div>
            </div>
            <div class="c-v-center c-v-content">
                <p v-for="(text, key) of content" :key="key" :class="`v-c-title-${key}`">
                    <Typewriter v-if="order >= key" :text="text" @finish="finish" />
                </p>
                <p class="c-v-c-last" v-if="isShowByLast">
                    {{ countDown }}s后自动进入首页，或<span @click="close">点此直接进入</span>
                </p>
            </div>
        </section>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

import Typewriter from '@components/Typewriter'

import documentUtils from '@utils/document'
import currentDevice from '@utils/currentDevice'

import covid19LargeImg from '@assets/imgs/video_large.png'
import covid19SmallImg from '@assets/imgs/video_small.png'

/** 定时器id */
let timerId = null as unknown as NodeJS.Timeout

/** 当前已展示的文字段数 */
const order = ref(0)
/** 倒计时 */
const countDown = ref(3)
/** 是否展示背景图片 */
const isShowBg = ref(true)
/** 是否展示跳转文字 */
const isShowByLast = ref(false)
/** 是否展示加载动画 */
const isLoading = ref(true)
/** 要展示的内容 */
const content = reactive([])

/** 每打印完一段文字之后调用 */
const finish = () => {
    order.value++
    // 是否打印完成
    if (order.value === 4) {
        isShowByLast.value = true
        timerId = setInterval(() => {
            // 倒计时结束
            if (countDown.value === 1) return close()
            countDown.value--
        }, 1000)
    }
}
/** 负责关闭开场图片引入 */
const close = () => {
    clearInterval(timerId)
    isShowBg.value = false
    // 显示滚动条
    documentUtils.scrollBar.show()
}

/** 图片加载完成后触发 */
const load = () => {
    // 取消加载动画
    isLoading.value = false
    /** covid19开始时间 */
    const start = Number(new Date('2019/12/08 00:00:00'))
    /** 当前时间 */
    const cur = Number(new Date())
    const day = 1000 * 60 * 60 * 24
    /** covid19起止天数，以当前时间为基准 */
    const dur = Math.floor((cur - start) / day)
    const _content = [
        `2019年12月08日，湖北省武汉市通报了首例不明原因肺炎患者发病，距今已过去了${dur}天`,
        '愿疫情过后，人长久',
        '海有舟可渡，山有路可行',
        '余下岁月，无灾无难'
    ]
    Object.assign(content, _content)
    // 隐藏滚动条
    documentUtils.scrollBar.hidden()
}
</script>

<style lang="less">
.covid19-bg-img {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
    background-color: rgb(244, 244, 244);
    img {
        object-fit: cover;
    }
    .c-v-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .c-v-loading {
        width: 60px;
        height: 60px;
        border: 2px solid #000;
        border-top-color: rgba(0, 0, 0, 0.2);
        border-right-color: rgba(0, 0, 0, 0.2);
        border-bottom-color: rgba(0, 0, 0, 0.2);
        border-radius: 100%;
        animation: bg-img-loading infinite 0.75s linear;
    }
    .c-v-content {
        min-width: 360px;
        color: rgb(255, 255, 255);
        p {
            font-weight: 600;
        }
        .v-c-title-0 {
            margin-bottom: 50px;
        }
        .v-c-title-0 {
            font-size: 26px;
        }
        .v-c-title-1 {
            font-size: 32px;
        }
        .v-c-title-2 {
            font-size: 34px;
        }
        .v-c-title-3 {
            font-size: 40px;
        }
        .c-v-c-last {
            font-weight: 400;
            font-size: 18px;
            margin-top: 100px;
            text-align: end;
            opacity: 0;
            animation: content-last-bounce 0.5s linear forwards;
            span {
                font-weight: 600;
                cursor: pointer;
                text-decoration-line: underline;
            }
        }
    }
}

.bg-img-enter-from,
.bg-img-leave-to {
    height: 0;
    opacity: 0;
    transition: all 1s;
}
.bg-img-enter-from .c-v-content,
.bg-img-leave-to .c-v-content {
    opacity: 0;
    transition: all 0.5s;
}

@keyframes bg-img-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes content-last-bounce {
    0% {
        transform: scale(0.85);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
