<template>
    <div class="covid19-signature">
        <h1>{{ i18nMap.header.menus.signature.technology.frontEnd }}</h1>
        <ul class="s-technology">
            <li>- Vue3</li>
            <li>- Vite</li>
            <li>- TypeScript</li>
            <li>- Less</li>
            <li>- Echarts</li>
            <li>- @vuemap/vue-amap</li>
        </ul>
        <h1>{{ i18nMap.header.menus.signature.technology.api }}</h1>
        <ul class="s-technology">
            <li>- Apifox</li>
        </ul>
        <h1>{{ i18nMap.header.menus.signature.technology.backEnd }}</h1>
        <ul class="s-technology">
            <li>- MySql</li>
            <li>- Express</li>
            <li>- TypeScript</li>
        </ul>
        <h1>{{ i18nMap.header.menus.signature.feature.title }}</h1>
        <ul class="s-feature">
            <li v-for="(c, key) of i18nMap.header.menus.signature.feature.content" :key="key">
                <h2>{{ c[0] }}</h2>
                <p>{{ c[1] }}</p>
            </li>
        </ul>
        <h1>{{ i18nMap.header.menus.signature.comments.title }}</h1>
        <ul class="s-comments">
            <li>
                1.
                <a href="https://www.apifox.cn/apidoc/shared-7f32c20d-07b3-4914-b5b2-4906d6040745" target="_blank">{{
                    i18nMap.header.menus.signature.comments.content.api
                }}</a>
            </li>
            <li>
                2.
                <a href="https://github.com/FuncJin/Covid19-Visualization" target="_blank">{{
                    i18nMap.header.menus.signature.comments.content.git
                }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import constant from '@constant/index'

const { injectionKey, defaultValue } = constant

const i18nMap = inject(injectionKey.I18NMAP, defaultValue.i18nMap)
</script>

<style lang="less" scoped>
.covid19-signature {
    h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }
    .s-technology {
        font-size: 14px;
        margin-bottom: 30px;
    }
    .s-feature {
        h2 {
            margin-bottom: 5px;
        }
        li {
            margin-bottom: 20px;
        }
    }
    .s-comments {
        li {
            margin-bottom: 10px;
        }
        a {
            text-decoration-line: underline;
        }
    }
}
</style>
