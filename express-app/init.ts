import dbUtils from './database/utils'

const queue = [dbUtils.updateData]

const init = () => queue.forEach((f) => f())

export default init
