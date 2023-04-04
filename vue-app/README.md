# 前端部分

## 目录说明

src 根目录下

```
api # Http Api接口
assets # 静态资源
components # 通用组件
config # 配置文件
constant # 常量文件
docs # 文档说明
interface # 接口类型
utils # 工具函数
views # 视图组件
App.vue
init.ts # 初始化文件
main.ts # 入口文件
```

## 使用教程

1. 克隆此项目至本地

```
git clone https://github.com/FuncJin/Covid19-Visualization
```

2. 将命令行切换至当前目录下

```
cd ./vue-app
```

3. 安装依赖

```
npm i
```

4. 您需要在 vue-app/src/config 中更改相应配置（其中也包括高德地图的 key 需要您自定义）

```typescript
// 例如以下配置
const release = {
    url: 'Enter the address of your api request, such as http://127.0.0.1:8080',
    amap: {
        key: 'Enter your Amap key here, required!',
        securityJsCode: 'Enter your Amap securityJsCode here, required!'
    }
}

export default release
```

5. 运行或打包此项目

```
# 运行
npm run dev
```

或

```
# 打包
npm run build
```
