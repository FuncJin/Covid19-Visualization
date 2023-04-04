import mysql from 'mysql'

import config from '../config'

const connection = mysql.createConnection(config.sqlConnection)

/** 读写数据库 */
const sqlOperations = <T = any>(sql: string, isWhole = false): Promise<T> =>
    new Promise((r) => connection.query(sql, (err, data) => r(isWhole ? data : data[0])))

/** 执行某条sql语句是否报错 */
const isExecSqlError = async (sql: string) => {
    try {
        await sqlOperations(sql)
        return true
    } catch (err) {
        return false
    }
}

const data = {
    sqlOperations,
    isExecSqlError
}

export default data
