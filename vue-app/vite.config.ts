import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueAmapResolver } from '@vuemap/unplugin-resolver'

import postcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VueAmapResolver()]
        }),
        Components({
            resolvers: [VueAmapResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@api': resolve(__dirname, 'src/api'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@config': resolve(__dirname, 'src/config'),
            '@constant': resolve(__dirname, 'src/constant'),
            '@interface': resolve(__dirname, 'src/interface'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@views': resolve(__dirname, 'src/views')
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    base: './',
    server: {
        port: 4000,
        open: true,
        cors: true
    },
    css: {
        postcss: {
            plugins: [postcssPresetEnv()]
        }
    },
    build: {
        minify: true,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) return 'vendor'
                }
            }
        }
    }
})
