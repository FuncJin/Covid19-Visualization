import chinaSqlApi from '../database/sql/china'

import type { HandleHttpApi } from './interface'

/** 获取全国整体的疫情数据总览 */
const country: HandleHttpApi = async (req, res) => {
    const data = await chinaSqlApi.select.all()
    res.send(data)
}

export default country
