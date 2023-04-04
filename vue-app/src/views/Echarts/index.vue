<template>
    <div class="covid19-echarts">
        <p class="e-title covid19-theme-transition-text-color">
            {{ i18nMap.body.echarts.title.text1 }}
        </p>
        <Bar.X :province="area.a1.map" :name="area.a1.name" :values="area.a1.values" />
        <p class="e-title covid19-theme-transition-text-color">
            {{ i18nMap.body.echarts.title.text2 }}
        </p>
        <Pie.Hollow :province="area.a3.map" :values="area.a3.values" />
        <p class="e-title covid19-theme-transition-text-color">
            {{ i18nMap.body.echarts.title.text3 }}
        </p>
        <Pie.Basis :province="area.a4.map" :values="area.a4.values" />
        <p class="e-title covid19-theme-transition-text-color">
            {{ i18nMap.body.echarts.title.text4 }}
        </p>
        <Bar.Y :province="area.a2.map" :name="area.a2.name" :values="area.a2.values" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch, inject } from 'vue'

import Bar from '@views/Echarts/Bar'
import Pie from '@views/Echarts/Pie'

import constant from '@constant/index'

import type { Covid19ProvOrCityData } from '@api/interface'
import type { CustomObject } from '@interface/index'

/** Bar与Pie共有的Props */
type EchartsProp = {
    /** 用于找出当前地区 */
    map: Map<string, Covid19ProvOrCityData>
}

/** 柱状图所需的省份数据 */
type ProvinceBar = EchartsProp & {
    /** 名称 */
    name: string[]
    /** 省份疫情数据 */
    values: number[]
}
/** 饼图所需的省份数据 */
type ProvincePie = EchartsProp & {
    values: Covid19ProvOrCityData[]
}
/**
 * Echarts绘制数据
 *
 * a1: 柱状图(x)
 *
 * a2: 饼图(中空)
 *
 * a3: 饼图(实心)
 *
 * a4: 柱状图(y)
 */
type Area = CustomObject<'a3' | 'a4', ProvincePie> & CustomObject<'a1' | 'a2', ProvinceBar>

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
const province = inject(injectionKey.PROVINCE, defaultValue.province)

/** 柱状图省份数据 */
const provinceBar = () =>
    ({
        map: new Map(),
        name: [],
        values: []
    } as ProvinceBar)
/** 饼图省份数据 */
const provincePie = () =>
    ({
        map: new Map(),
        values: []
    } as ProvincePie)
/** echarts绘制所需的地图数据(a1-a4) */
const _area = (): Area => ({
    a1: provinceBar(),
    a2: provinceBar(),
    a3: provincePie(),
    a4: provincePie()
})

const area = reactive({ ..._area() })

/** a1(柱状图x) */
/** a2(中空饼图) */
const _a2 = ['香港', '澳门', '台湾']
/** a3(实心饼图)  */
const _a3 = ['北京', '天津', '上海', '重庆']
/** a4(柱状图y) */
const _a4 = ['新疆', '西藏', '宁夏', '广西', '内蒙古']

watch(province, (province: Covid19ProvOrCityData[]) => {
    const data: Area = { ..._area() }
    province.forEach((d) => {
        // 饼图(中空)
        const isA2Name = _a2.includes(d.name)
        if (isA2Name) {
            data.a2.name.push(d.name)
            data.a2.values.push(d.data.confirmed_count)
            data.a2.map.set(d.name, d)
            return
        }
        // 饼图(实心)
        const isA3Name = _a3.includes(d.name)
        if (isA3Name) {
            data.a3.map.set(d.name, d)
            data.a3.values.push(d)
            return
        }
        // 柱状图(y)
        const isA4Name = _a4.includes(d.name)
        if (isA4Name) {
            data.a4.map.set(d.name, d)
            data.a4.values.push(d)
            return
        }
        // 柱状图(x)
        data.a1.name.push(d.name)
        data.a1.values.push(d.data.confirmed_count)
        data.a1.map.set(d.name, d)
    })
    // 分发所有数据
    Object.assign(area, data)
})
</script>

<style lang="less" scoped>
.covid19-echarts {
    width: 90%;
    margin: 0 auto;
    .e-title {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 40px;
        color: var(--text-title-color);
    }
}
</style>
