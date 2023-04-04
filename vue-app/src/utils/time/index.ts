/** 格式化位数 */
const timeFormatter = (t: number) => (t >= 10 ? `${t}` : `0${t}`)

/** 以对象的形式返回年月日 */
const getDateClassify = (timestamp: number) => {
    const date = new Date(timestamp)
    return {
        year: timeFormatter(date.getFullYear()),
        month: timeFormatter(date.getMonth()),
        day: timeFormatter(date.getDate())
    }
}

/** 返回指定格式的年月日 */
const getDateText = (timeStamp: number) => {
    const t = getDateClassify(timeStamp)
    return `${t.year}年${t.month}月${t.day}日`
}

const data = { getDateClassify, getDateText }

export default data
