import i18nUtils from '@utils/i18n'

/** 语言包 */
const lang = () => (i18nUtils.lang() ? null : i18nUtils.setLang('zh_cn'))
/** 2019 Novel Coronavirus */
const print = () =>
    console.log('%c愿疫情过后，人长久。海有舟可渡，山有路可行。余下岁月，无灾无难。', 'color:#0f9b38;font-weight:600;')

const queue = [lang, print]

/** 初始化 */
const init = () => queue.forEach((f) => f())

export default init
