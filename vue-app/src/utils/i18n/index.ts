import storage from '@utils/storage'
import en from './lang/en'
import fr from './lang/fr'
import jp from './lang/jp'
import ko from './lang/ko'
import zh_cn from './lang/zh-cn'
import zh_hk from './lang/zh-hk'

import type { LangType, LangMapType } from './interface'

const _map = { en, fr, jp, ko, zh_cn, zh_hk }

/**
 * 以字符串的形式读取语言包中的内容
 * @param keys 以点(.)组成的字符串，每组字符均为对应的key
 * @param obj 要读取的语言包
 * @returns
 */
const getValue = (keys: string[], obj: LangMapType) => {
    let result = obj
    keys.forEach((k) => (result = (result as any)[k]))
    return result
}

const data = {
    /** 当前语种 */
    lang: () => storage.getItem<LangType>('lang'),
    /** 切换语种 */
    setLang: (lang: LangType) => storage.setItem('lang', lang),
    /** 当前语言包(函数形式) */
    $i18n: (keys: string) => {
        const _keys = keys.split('.')
        return getValue(_keys, _map[data.lang()])
    },
    /** 当前语言包(对象形式) */
    $i18nMap: () => ({ ..._map[data.lang()] })
}

export default data
