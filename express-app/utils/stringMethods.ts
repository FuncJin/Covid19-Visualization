/** 大小写转驼峰 */
const transformHump = <T = any>(n: string) => n.replace(/[A-Z]/g, (s) => `_${s.toLowerCase()}`) as T

const data = { transformHump }

export default data
