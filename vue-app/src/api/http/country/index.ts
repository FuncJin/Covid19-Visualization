import fetch from '@api/fetch'

import type { Country } from './interface'

/** 获取全国整体的疫情数据总览 */
const country = () => fetch<Country>('/country')

export default country
