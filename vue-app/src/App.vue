<template>
    <Header :progress="progress" />
    <VueAmap />
    <PageTitle />
    <Echarts />
    <Footer />
    <Covid19Video />
</template>

<script lang="ts" setup>
import { reactive, ref, provide } from 'vue'

import Header from '@views/Header'
import VueAmap from '@views/VueAmap'
import Footer from '@views/Footer'
import PageTitle from '@views/PageContentTitle'
import Covid19Video from '@views/Covid19Video'
import Echarts from '@views/Echarts'

import i18nUtils from '@utils/i18n'
import visibilitychange from '@utils/pageTitleVisibilitychange'
import constant from '@constant/index'

import provinceHttpApi from '@api/http/province'
import countryHttpApi from '@api/http/country'
import citiesHttpApi from '@api/http/cities'

import type { ForceLang } from '@utils/i18n/interface'
import type { Country } from '@api/http/country/interface'
import type { Covid19ProvOrCityData } from '@api/interface'

/** 默认的国家疫情数据 */
const _country: Country = {
    comment: '',
    update_time: 0,
    data: {
        confirmed_count: 0,
        suspected_count: 0,
        cured_count: 0,
        dead_count: 0
    }
}

/** 语言包 */
const i18nMap = reactive(i18nUtils.$i18nMap())
/** 国家数据 */
const country = reactive({ ..._country })
/** 省级数据 */
const province: Covid19ProvOrCityData[] = reactive([])
/** 市级数据 */
const cities: Covid19ProvOrCityData[] = reactive([])
/** 省级与市级数据(并列，而不是层级关系) */
const provCities: Covid19ProvOrCityData[] = reactive([])
/** 当前已请求了多少数据 */
const progress = ref(0)

/** 更新当前所展示的语种 */
const forceLang: ForceLang = (lang) => {
    // 记录语种
    i18nUtils.setLang(lang)
    // Proxy Render
    Object.assign(i18nMap, i18nUtils.$i18nMap())
}

// 监听H5 Title
visibilitychange()
// 请求国家数据
countryHttpApi().then((data) => {
    // 当前请求已完成
    progress.value++
    Object.assign(country, data)
})
// 请求省级、市级数据
Promise.all([provinceHttpApi(), citiesHttpApi()]).then(([p, c]) => {
    // 当前请求已完成
    progress.value += 2
    Object.assign(province, p)
    Object.assign(cities, c)
    Object.assign(provCities, [...p, ...c])
})

// key-value
provide(constant.injectionKey.I18NMAP, i18nMap)
provide(constant.injectionKey.FORCELANG, forceLang)
provide(constant.injectionKey.COUNTRY, country)
provide(constant.injectionKey.PROVINCE, province)
provide(constant.injectionKey.CITIES, cities)
provide(constant.injectionKey.PROVCITIES, provCities)
</script>
