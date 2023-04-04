import dbUtils from '../database/utils'

const u = () => {
    /** 每72小时更新一次数据库中的所有疫情数据 */
    setInterval(dbUtils.updateData, 1000 * 60 * 60 * 72)
}

export default u
