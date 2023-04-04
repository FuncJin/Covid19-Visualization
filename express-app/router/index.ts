import express from 'express'

import cities from '../routes/cities'
import country from '../routes/country'
import province from '../routes/province'
import provinceCities from '../routes/provinceCities'

const router = express.Router()

/** 1. GET请求 */

router.get('/cities', cities)
router.get('/country', country)
router.get('/province', province)
router.get('/province/cities', provinceCities)

export default router
