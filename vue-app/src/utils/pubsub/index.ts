import type { EventsName, subscribeCallback, SwitchStyle, SearchAreaDataType } from './interface'

class PubSub {
    /** map: [[eventName, fn]] */
    private readonly container = new Map<EventsName, Function[]>([])
    /** 发布 */
    publish(name: 'switchStyle', data: SwitchStyle): void
    publish(name: 'highArea', data: string): void
    publish(name: 'searchAreaData', data: SearchAreaDataType): void
    publish(name: EventsName, data: any) {
        /**
         * 发布事件有两种情况：
         *      1. 当前事件已被订阅，则触发其事件
         *      2. 当前事件未被订阅，则抛出错误
         */
        const fn = this.container.get(name)
        if (!fn) throw new ReferenceError(`${name}事件未被订阅`)
        /** 每个订阅的函数都会收到其事件名，及发布的数据 */
        fn.forEach((f) => f(...[name, data]))
    }
    /** 订阅 */
    subscribe(name: 'switchStyle', fn: subscribeCallback<SwitchStyle>): void
    subscribe(name: 'highArea', fn: subscribeCallback<string>): void
    subscribe(name: 'searchAreaData', fn: subscribeCallback<SearchAreaDataType>): void
    subscribe(name: EventsName, fn: subscribeCallback<any>) {
        const _fns = this.container.get(name)
        // 允许多处订阅
        const fns = _fns ? _fns : []
        fns?.push(fn)
        this.container.set(name, fns)
    }
    /** 取消订阅 */
    unsubscribe(name: EventsName) {
        /**
         * 取消订阅有两种情况：
         *      1. 当前事件已被订阅过，则在container中删除该事件
         *      2. 当前事件未被订阅，则抛出错误
         */
        const have = this.container.get(name)
        if (!have) throw new ReferenceError(`${name}事件未被订阅`)
        this.container.delete(name)
    }
}
const pubsub = new PubSub()

export default pubsub
