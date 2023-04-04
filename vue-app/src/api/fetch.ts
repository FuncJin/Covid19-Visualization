import config from '@config/index'

/** fetch请求函数 */
const _fetch = <T = any>(path: string) =>
    new Promise<T>((r) =>
        fetch(config.url + path)
            .then((d) => d.json())
            .then((d) => r(d))
    )

export default _fetch
