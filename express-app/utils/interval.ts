type IntervalFunc = {
    /** 总共调用多少次 */
    max: number
    /** 间隔多长时间调用(默认5s) */
    delay?: number
    /** 每次调用的函数 */
    func: (order: number) => void
}

/**
 * 反复地间隔执行某个函数
 * @param max 总共调用多少次
 * @param delay 间隔多长时间调用(默认5s)
 * @param func 每次调用的函数(该函数会收到当前函数被调用的顺序，以0开始，以max-1结束)
 *
 */
const intervalFunc = ({ max, delay, func }: IntervalFunc) => {
    let counts = 0
    const timer: NodeJS.Timeout = setInterval(
        () => {
            if (counts === max) return clearInterval(timer)
            func(counts++)
        },
        delay ? delay : 1000 * 5
    )
}

export default intervalFunc
