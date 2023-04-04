/**
 * 用于查询当前系统是深色还是浅色模式
 * @returns {
 *      theme: 当前系统是深色还是浅色，值为_light、dark
 *
 *      _light: 当监听到系统切换为浅色模式时调用
 *
 *      dark: 当监听到系统切换为深色模式时调用
 * }
 */
const topicAdaptation = () => {
    const data = {
        /** 当前系统主题模式 */
        theme: '',
        /** 切换至浅色模式时调用 */
        light: () => {},
        /** 切换至深色模式时调用 */
        dark: () => {}
    }
    /** 媒体查询 */
    const mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    if (!mediaQuery) return data
    const handle = () => {
        if (mediaQuery.matches) {
            // 深色模式
            data.theme = 'dark'
            data.dark()
        } else {
            // 浅色模式
            data.theme = '_light'
            data.light()
        }
    }
    handle()
    // 监听系统模式变化(跟随系统)
    mediaQuery.addEventListener('change', handle)
    return data
}

export default topicAdaptation
