import zh from './lang/zh-cn'

import type { CustomKeysByObject } from '@interface/index'

/**
 * fr: 法语
 * jp: 日语
 * ko: 韩语
 * en: 英文
 * zh_cn: 简体中文
 * zh_hk: 繁体中文
 */
export type LangType = 'fr' | 'jp' | 'ko' | 'en' | 'zh_cn' | 'zh_hk'

/** 语言包内容(key-value) */
export type LangMapType = typeof zh

/** 更新语种 */
export type ForceLang = (lang: LangType) => void

/** 与国际化有关的年月日 */
export type LangTime = CustomKeysByObject<'year' | 'month' | 'day'>
