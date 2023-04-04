import fetch from '@api/fetch'

import type { Covid19ProvOrCityData } from '@api/interface'

/** 获取全国所有省份的疫情数据总览(不包含其省份下的地级市) */
const province = () => fetch<Covid19ProvOrCityData[]>('/province')

export default province
