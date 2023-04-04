import type { Covid19ProvOrCityData } from '@api/interface'

/**
 * 全局发布订阅事件名
 *
 * switchStyle切换主题
 *
 * searchAreaData搜索地区数据
 *
 * highArea高亮某个地区
 */
export type EventsName = 'switchStyle' | 'searchAreaData' | 'highArea'

export type subscribeCallback<T = any> = (name: EventsName, fn: T) => void

/** searchAreaData事件的数据 */
export type SearchAreaDataType = Covid19ProvOrCityData & { isMsg?: boolean }
