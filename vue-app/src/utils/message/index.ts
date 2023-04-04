import { createVNode, render } from 'vue'

import Message from '@components/Message'

type Message = {
    title: string
    content: string
    dur?: number
    type?: 'success' | 'warn'
}

/** 同一时间段所展示全局消息提示的个数 */
let counts = 0

const message = (info: Message) => {
    const div = document.createElement('div')
    counts++
    // 最大显示区域
    const y = counts * 35 <= 180 ? counts * 35 : 180
    div.style.transform = `translateY(-${y}px)`
    // 挂载至预先准备好的全局dom中(单独)
    document.querySelector('.g-covid19-message')!.appendChild(div)
    const dur = info.dur ? info.dur : 1000 * 5
    const vnode = createVNode(Message, { ...info, dur, isBoxShadow: !(counts > 5) })
    // 渲染
    render(vnode, div)
    setTimeout(() => {
        setTimeout(() => {
            render(null, div)
            // 删除dom节点
            div.remove()
            counts--
        }, 100 * 5)
    }, dur)
}

export default message
