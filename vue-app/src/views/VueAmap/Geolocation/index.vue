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
    const { province, city, type, adcode } = e
    // 已知的定位成功
    if (type === 'complete') {
        const cur = provCities.find((a) => a.adcode === adcode)
        if (cur) pubsub.publish('searchAreaData', { ...cur, isMsg: false })
        return message({
            title: lang().success.title,
            content: lang().success.content + `${province}${city}`
        })
    }
    // 已知的定位失败
    message({
        title: lang().warn.title,
        content: lang().warn.content,
        type: 'warn'
    })
}
</script>
