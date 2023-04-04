import fetch from '@api/fetch'

import type { Covid19ProvOrCityData } from '@api/interface'

/** 获取全国所有地级市的疫情数据总览(不包含其下的区、县、镇等) */
const cities = () => fetch<Covid19ProvOrCityData[]>('/cities')

export default cities
