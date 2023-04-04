<template>
    <span>{{ text }}</span>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

type TextType = string | number

type Props = { text: TextType }
type Emits = {
    (e: 'finish', d: TextType): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const text = ref('')

onMounted(() => {
    let len = 0
    const id: NodeJS.Timeout = setInterval(() => {
        const _text = String(props.text)
        if (len === _text.length) {
            emits('finish', props.text)
            clearInterval(id)
            return
        }
        text.value = _text.slice(0, len + 1)
        len++
    }, 150)
})
</script>
