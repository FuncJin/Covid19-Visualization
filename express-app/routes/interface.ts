import type { Request, Response } from 'express'

/** 路由处理函数 */
export type HandleHttpApi = (req: Request, res: Response) => void
