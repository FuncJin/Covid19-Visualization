<template>
    <!-- 地图点标记 -->
    <el-amap-marker :clickable="false" :position="props.mark.position" :cursor="'default'">
        <div class="covid19-amap-marker">
            <img src="https://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png" />
            <div class="a-m-content">
                <p class="a-m-c-text a-m-c-area">{{ mark.name }}</p>
                <p class="a-m-c-text a-m-c-comment">
                    {{ mark.counts }}
                </p>
            </div>
        </div>
    </el-amap-marker>
</template>

<script lang="ts" setup>
type Props = {
    mark: {
        position: number[]
        name: string
        counts: number
    }
}

const props = defineProps<Props>()
</script>

<style lang="less" scoped>
.covid19-amap-marker {
    width: max-content;
    height: 26px;
    transform: translate(-9px, -26px);
    img {
        width: 18px;
        margin-right: 3px;
    }
    .a-m-content {
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        margin-bottom: 5px;
        box-shadow: -1px 5px 16px 0px rgb(0 0 0 / 13%), 0 3px 6px -4px rgba(0, 0, 0, 0.12),
            0 9px 28px 8px rgba(0, 0, 0, 0.05);
        .a-m-c-text {
            padding: 0 5px;
            font-size: 12px;
            line-height: 22px;
            display: inline-block;
        }
        .a-m-c-area {
            color: var(--bg-color);
            background-color: rgb(216, 100, 34);
        }
        .a-m-c-comment {
            opacity: 0.88;
            color: var(--text-title-color);
            background-color: var(--bg-color);
        }
    }
}
</style>
