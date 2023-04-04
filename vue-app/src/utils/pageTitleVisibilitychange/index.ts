/** 在进入和离开当前H5页面时切换标题 */
const pageTitle = () => {
    // 原标题
    let _title = document.title
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // 不可见时
            _title = document.title
            document.title = 'Vue3+TS+Express可视化-毕业设计'
        } else {
            // 可见时
            document.title = _title
        }
    })
}

export default pageTitle
