<template>
    <section class="covid19-body">
        <!-- amap -->
        <el-amap
            :center="_center"
            :zoom="_zoom"
            :zooms="zooms"
            :isHotspot="false"
            :scrollWheel="false"
            :doubleClickZoom="false"
            @init="init"
        >
            <ControlScale />
            <ToolBar />
            <ControlBar />
            <Geolocation />
            <LayerDistrict />
        </el-amap>
        <!-- amap panel -->
        <div class="b-panel b-panel-left">
            <NcovDetails />
        </div>
        <div class="b-panel b-panel-right">
            <ColorClassify />
        </div>
        <div class="b-reset-pos">
            <ResetAMapPos @reset="reset" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import NcovDetails from '@views/NcovPanel/Details'
import ColorClassify from '@views/NcovPanel/ColorClassify'
import ResetAMapPos from '@views/VueAmap/ResetAMapPos'
import ControlBar from '@views/VueAmap/ControlBar'
import Geolocation from '@views/VueAmap/Geolocation'
import ToolBar from '@views/VueAmap/ToolBar'
import ControlScale from '@views/VueAmap/ControlScale'
import LayerDistrict from '@views/VueAmap/LayerDistrict'

import pubsub from '@utils/pubsub'
import message from '@utils/message'
import storage from '@utils/storage'
import styleUtils from '@utils/style'
import constant from '@constant/index'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)

const amap = {
    /** 高德地图实例 */
    e: null as any,
    /** 当前主题(默认) */
    curStyle: 'normal'
}
/** 缩放层级的限制范围 */
const zooms = [3, 9]
/** 默认的缩放层级 */
const _zoom = 4.4
/** 默认的中心点 */
const _center = [104.62313499999999, 37.358796]

/** 切换地图主题 */
const changeMapTheme = (style: string) => {
    if (style === '_light') return
    amap.e.setMapStyle(`amap://styles/${style}`)
}
/** 切换地图与网站的主题 */
const _changeAllTheme = (style: string) => {
    const mapStyle = style === '_light' ? 'normal' : style
    changeMapTheme(mapStyle)
    // 切换网站主题
    styleUtils.changeTheme(style)
}
/** 地图初始化完成后触发 */
const init = async (e: any) => {
    // 保存地图实例
    amap.e = e
    // 主题自适应与初始化
    const style = styleUtils.adaptation()
    _changeAllTheme(style.theme)
    style.dark = () => _changeAllTheme('dark')
    style.light = () => _changeAllTheme('_light')
    // 重置当前所使用的地图样式编号
    storage.setItem('theme_order', '0')
    // 地图显示要素
    amap.e.setFeatures(['bg', 'road'])
}
/** 切换主题样式 */
const switchStyle = (style: string) => {
    const lang = () => i18nMap.header.menus.style
    if (amap.curStyle === style)
        return message({
            title: lang().globalMsg.warn.title,
            content: lang().globalMsg.warn.content,
            type: 'warn'
        })
    amap.curStyle = style
    _changeAllTheme(style)
    message({
        title: lang().globalMsg.success.title,
        content: lang().globalMsg.success.content
    })
}

/** 重置地图缩放等级 */
const reset = () => {
    /** 判断zoom是否相等 */
    const isZoom = amap.e.getZoom() === _zoom
    // 判断center是否相等
    const { KL, kT } = amap.e.getCenter()
    const [_KL, _kT] = _center
    const isReset = isZoom && KL === _KL && kT === _kT
    const lang = () => i18nMap.body.amap.resetPos.globalMsg
    // 层级与中心位置未变化
    if (isReset)
        return message({
            title: lang().warn.title,
            content: lang().warn.content,
            type: 'warn'
        })
    amap.e.setZoom(_zoom)
    amap.e.setCenter(_center)
    message({
        title: lang().success.title,
        content: lang().success.content
    })
}

pubsub.subscribe('switchStyle', (_, key) => switchStyle(key))
</script>

<style lang="less" scoped>
.covid19-body {
    height: calc(100% - 126px - 40px);
    position: relative;
    .b-panel {
        position: absolute;
        z-index: 197;
    }
    .b-panel-left {
        top: 20px;
        left: 20px;
    }
    .b-panel-right {
        bottom: 25%;
        right: 20px;
    }
    .b-reset-pos {
        width: 33px;
        height: 33px;
        padding: 3px;
        box-sizing: border-box;
        position: absolute;
        top: 100px;
        right: 20px;
        border-radius: 17px;
        background-color: #fff;
    }
}
</style>
