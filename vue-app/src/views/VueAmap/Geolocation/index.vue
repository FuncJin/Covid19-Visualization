<template>
    <!-- 定位 -->
    <el-amap-control-geolocation
        :position="{ top: '145px', right: '20px' }"
        @complete="getLocation"
        :zoomToAccuracy="false"
        :getCityWhenFail="true"
        :GeoLocationFirst="true"
        :panToLocation="false"
        :showMarker="false"
        :showCircle="false"
    />
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import pubsub from '@utils/pubsub'
import message from '@utils/message'
import constant from '@constant/index'

type GetLocation = {
    province: string
    city: string
    adcode: string
    type: 'complete' | 'error'
}

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const provCities = inject(injectionKey.PROVCITIES, defaultValue.provCities)

const getLocation = (e: GetLocation) => {
    const lang = () => i18nMap.body.amap.location.globalMsg
    const { province, city, adcode } = e
    // 若省、市、邮政编码有一个不存在，则视为本次定位失败
    if (!(province && city && adcode))
        return message({
            title: lang().warn.title,
            content: lang().warn.content,
            type: 'warn'
        })
    // 否则一律视为定位成功
    const cur = provCities.find((a) => a.adcode === adcode)
    if (cur) pubsub.publish('searchAreaData', { ...cur, isMsg: false })
    return message({
        title: lang().success.title,
        content: lang().success.content + `${province}${city}`
    })
}
</script>
