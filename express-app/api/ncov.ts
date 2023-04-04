import request from 'request'

/** Covid19 Api: https://lab.isaaclin.cn/nCoV */
const host = 'http://lab.isaaclin.cn/nCoV/api'

const ncov = <T = any>(path: string) => new Promise<T>((r) => request.get(host + path, (e, d) => r(JSON.parse(d.body))))

export default ncov
