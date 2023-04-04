import updateData from './updateData'

const queue = [updateData]

/** 定时任务 */
const timing = () => queue.forEach((f) => f())

export default timing
