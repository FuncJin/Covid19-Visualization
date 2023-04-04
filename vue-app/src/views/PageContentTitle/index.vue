<template>
    <p class="covid19-theme-transition-text-color covid19-page-title">
        {{ i18nMap.body.page.update_time(content.update_time) }}
        <span class="covid19-data-confirmedCount">{{
            i18nMap.body.page.confirmed_count(content.data.confirmed_count)
        }}</span
        >，
        <span class="covid19-data-suspectedCount">{{
            i18nMap.body.page.suspected_count(content.data.suspected_count)
        }}</span
        >， <span class="covid19-data-curedCount">{{ i18nMap.body.page.cured_count(content.data.cured_count) }}</span
        >， <span class="covid19-data-deadCount">{{ i18nMap.body.page.dead_count(content.data.dead_count) }}</span
        >。
    </p>
</template>

<script lang="ts" setup>
import { reactive, inject, watch } from 'vue'

import timeUtils from '@utils/time'
import constant from '@constant/index'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const country = inject(injectionKey.COUNTRY, defaultValue.country)

const content = reactive({
    data: {
        confirmed_count: 0,
        suspected_count: 0,
        cured_count: 0,
        dead_count: 0
    },
    update_time: {
        year: '',
        month: '',
        day: ''
    }
})

watch(country, (c) => {
    const update_time = timeUtils.getDateClassify(c.update_time)
    Object.assign(content, { ...c, update_time })
})
</script>

<style lang="less" scoped>
.covid19-page-title {
    width: 70%;
    margin: 0 auto;
    padding: 20px 0;
    margin-bottom: 80px;
    font-size: 22px;
    text-align: center;
    font-weight: 500;
    color: var(--text-title-color);
    span {
        font-size: 24px;
        font-weight: 600;
    }
}
</style>
