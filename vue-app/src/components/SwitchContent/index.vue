<template>
    <div class="switch-content">
        <div class="s-c-container" :style="{ transform: `translateY(${distance})` }">
            <p v-for="(item, key) of list" :key="key">{{ item }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watchEffect } from 'vue'

type Props = { text: string | number }

const props = defineProps<Props>()

const list = reactive([props.text])
const distance = ref('0')

watchEffect(() => {
    // 追加dom
    list.push(props.text)
    const len = list.length - 1
    if (!len) return
    distance.value = `-${35 * len}px`
})
</script>

<style lang="less" scoped>
.switch-content {
    height: 100%;
    overflow: hidden;
    .s-c-container {
        transition: transform 1s;
    }
}
</style>
