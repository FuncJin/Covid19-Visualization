import fetch from '@api/fetch'

import type { ProvinceCities } from './interface'

/** 获取全国所有省份的疫情数据总览(包含其省份下的地级市) */
const provinceCities = () => fetch<ProvinceCities[]>('/province/cities')

export default provinceCities
