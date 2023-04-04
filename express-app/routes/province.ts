import provinceSqlApi from '../database/sql/province'

import type { HandleHttpApi } from './interface'
import type { Covid19ProvinceData } from '../database/sql/province/interface'

/** 获取全国所有省份的疫情数据总览(不包含其省份下的地级市) */
const province: HandleHttpApi = async (req, res) => {
    const data = await provinceSqlApi.select.whichColumn<Covid19ProvinceData[]>([
        'name',
        'update_time',
        'adcode',
        'comment',
        'data'
    ])
    res.send(
        data.map((row) => {
            row.update_time = Number(row.update_time)
            row.data = JSON.parse(row.data as unknown as string)
            return row
        })
    )
}

export default province
