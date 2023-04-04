import isMobileOrIpad from '@utils/currentDevice'

/** 判断body是否有滚动条(y) */
const isScrollbar = () => {
    const r1 = document.body.scrollHeight > document.body.clientHeight
    const r2 = document.body.offsetHeight > document.body.clientHeight
    return r1 || r2
}

/** 显示滚动条(y) */
const show = () => {
    if (!isScrollbar()) return
    // 移动端或ipad时，不进行任何操作
    if (isMobileOrIpad()) return
    document.body.style.overflowY = 'auto'
    document.body.style.width = '100%'
}
/** 隐藏滚动条(y) */
const hidden = () => {
    if (!isScrollbar()) return
    // 移动端或ipad时，不进行任何操作
    if (isMobileOrIpad()) return
    document.body.style.overflowY = 'hidden'
    document.body.style.width = 'calc(100% - 17px)'
}

const scrollBar = { show, hidden }

export default scrollBar
