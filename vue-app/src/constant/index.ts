import zh_cn from '@utils/i18n/lang/zh-cn'

import type { InjectionKey } from 'vue'

import type { ForceLang, LangMapType } from '@utils/i18n/interface'
import type { Country } from '@api/http/country/interface'
import type { Covid19ProvOrCityData } from '@api/interface'

/** 语言包 */
const I18NMAP: InjectionKey<LangMapType> = Symbol.for('i18nMap')
/** 切换语种 */
const FORCELANG: InjectionKey<ForceLang> = Symbol.for('forceLang')
/** 国家数据 */
const COUNTRY: InjectionKey<Country> = Symbol.for('country')
/** 省级数据 */
const PROVINCE: InjectionKey<Covid19ProvOrCityData[]> = Symbol.for('province')
/** 市级数据 */
const CITIES: InjectionKey<Covid19ProvOrCityData[]> = Symbol.for('cities')
/** 省与市级数据 */
const PROVCITIES: InjectionKey<Covid19ProvOrCityData[]> = Symbol.for('provCities')

// 默认值
const i18nMap: LangMapType = { ...zh_cn }
const forceLang: ForceLang = (lang) => {}
const country: Country = {
    comment: '',
    update_time: 0,
    data: { confirmed_count: 0, suspected_count: 0, cured_count: 0, dead_count: 0 }
}
const province: Covid19ProvOrCityData[] = []
const cities: Covid19ProvOrCityData[] = []
const provCities: Covid19ProvOrCityData[] = []

const injectionKey = {
    I18NMAP,
    FORCELANG,
    COUNTRY,
    PROVINCE,
    CITIES,
    PROVCITIES
}
const defaultValue = {
    i18nMap,
    forceLang,
    country,
    province,
    cities,
    provCities
}

const data = { injectionKey, defaultValue }

export default data
