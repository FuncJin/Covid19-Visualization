import { createApp } from 'vue'
import { initAMapApiLoader } from '@vuemap/vue-amap'

import App from './App.vue'

import config from '@config/index'
import init from './init'

import '@vuemap/vue-amap/dist/style.css'

import '@assets/style/theme.less'
import '@assets/style/reset.less'
import '@assets/style/common.less'
import '@assets/style/media.less'

init()

initAMapApiLoader({
    key: config.amap.key,
    securityJsCode: config.amap.securityJsCode
})

createApp(App).mount('#root')
