import database from '../../index'

import type { Covid19ChinaData, Covid19ChinaDataSelect } from './interface'

const { sqlOperations } = database

/** 插入 */
const insert = (data: Covid19ChinaData['insert']) => {
    const { confirmed_count, suspected_count, cured_count, dead_count, comment, update_time } = data
    const _column = 'confirmed_count, suspected_count, cured_count, dead_count, comment, update_time'
    const _value = `${confirmed_count}, ${suspected_count}, ${cured_count}, ${dead_count}, '${comment}', '${update_time}'`
    return sqlOperations(`insert into china (${_column}) values (${_value})`)
}

/** 更新 */
const update = (data: Covid19ChinaData['insert']) => {
    const { confirmed_count, suspected_count, cured_count, dead_count, comment, update_time } = data
    const _value = `confirmed_count=${confirmed_count}, suspected_count=${suspected_count}, cured_count=${cured_count}, dead_count=${dead_count}, comment='${comment}', update_time='${update_time}'`
    return sqlOperations(`update china set ${_value}`)
}

/** 获取单列 */
const whereColumn: Covid19ChinaDataSelect = async (type) => {
    const data = await sqlOperations(`select ${type} from china`)
    let _tData = data ? data[type] : data
    return type !== 'update_time' ? _tData : Number(_tData)
}
/** 获取全部记录 */
const all = async (): Promise<Covid19ChinaData['return']> => {
    const _data = await sqlOperations(`select * from china`, true)
    const [data] = _data
    const result = { data: {} } as Covid19ChinaData['return']
    // 映射数据
    result.data = {
        confirmed_count: data.confirmed_count,
        suspected_count: data.suspected_count,
        cured_count: data.cured_count,
        dead_count: data.dead_count
    }
    result.comment = data.comment
    result.update_time = Number(data.update_time)
    return result
}

const data = {
    insert,
    update,
    select: {
        whereColumn,
        all
    }
}

export default data
