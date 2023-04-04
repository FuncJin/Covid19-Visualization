import provinceSqlApi from '../database/sql/province'

import type { HandleHttpApi } from './interface'

/** 获取全国所有省份的疫情数据总览(包含其省份下的地级市) */
const provinceCities: HandleHttpApi = async (req, res) => {
    const data = await provinceSqlApi.select.all()
    res.send(data)
}

export default provinceCities
