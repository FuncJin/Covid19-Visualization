/** 值为string的情况下，自定义key */
export type CustomKeysByObject<T extends string> = { [k in T]: string }

/** key为string的情况下，自定义value */
export type CustomValuesByObject<T = any> = { [k: string]: T }

/** 自定义对象的key、value */
export type CustomObject<T extends string, V> = { [k in T]: V }
