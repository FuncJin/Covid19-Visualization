/**
 * lang: 语言包
 *
 * theme_order: 当前正在使用的主题样式编号
 */
type LocalStorageType = 'lang' | 'theme_order'

const setItem = (key: LocalStorageType, value: string) => window.localStorage.setItem(key, value)
const getItem = <T extends string>(key: LocalStorageType): T => {
    const value = window.localStorage.getItem(key)
    return value ? value : ('' as any)
}
const removeItem = (key: LocalStorageType) => window.localStorage.removeItem(key)

const storage = { setItem, getItem, removeItem }

export default storage
