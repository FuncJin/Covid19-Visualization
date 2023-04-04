/** 获取x-y之间的随机数(包含x与y) */
const getSectionRandom = (x: number, y: number) => Math.round(Math.random() * (y - x) + x)

const data = { getSectionRandom }

export default data
