import provinceSqlApi from '../database/sql/province'

import type { HandleHttpApi } from './interface'
import type { Covid19ProvinceData } from '../database/sql/province/interface'

type CitiesSql = { cities: Covid19ProvinceData['cities'] }[]

/** 获取全国所有地级市的疫情数据总览(不包含其下的区、县、镇、街道等) */
const cities: HandleHttpApi = async (req, res) => {
    const data = await provinceSqlApi.select.whichColumn<CitiesSql>(['cities'])
    res.send(data.map((row) => JSON.parse(row.cities as unknown as string)).flat())
}

export default cities
