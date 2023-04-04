/** 观察某个dom是否可视 */
const intersectionObserver = (selector: string, callback: Function) => {
    let observer = new IntersectionObserver((a) => {
        if (!a[0].isIntersecting) return
        callback()
        // 取消观察
        observer.unobserve(document.querySelector(selector)!)
    })
    // 观察
    observer.observe(document.querySelector(selector)!)
}

export default intersectionObserver
