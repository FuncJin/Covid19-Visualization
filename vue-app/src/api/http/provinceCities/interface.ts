import type { Covid19ProvOrCityData } from '@api/interface'

/** 省级疫情数据(包含其直辖市) */
export type ProvinceCities = Covid19ProvOrCityData & {
    cities: Covid19ProvOrCityData
}
