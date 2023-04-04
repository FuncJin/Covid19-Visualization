# 后端部分

## 目录说明

根目录下

```
api # 第三方Http Api接口
config # 配置文件
database # 数据库
interface # 接口类型
router # 路由器
routes # 路由处理
timing # 定时任务
utils # 工具函数
app.ts # 入口文件
init.ts # 初始化
```

## 使用教程

1. 克隆此项目至本地

```
git clone https://github.com/FuncJin/Covid19-Visualization
```

2. 将命令行切换至当前目录下

```
cd ./express-app
```

3. 安装依赖

```
npm i
```

依赖安装完成后，需要按照 express-app/database/readme.md 的说明来创建两张数据表，主要用于数据的转存

4. 在 express-app/config 中更改相应配置

```typescript
// 例如以下配置
const sqlConnection = {
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'databaseName'
}

/** 正式版配置 */
const config = { sqlConnection }

export default config
```

5. 编译 ts

```
tsc
```

或

```
tsc --watch
```

编译后会在 express-app 目录下自动生成 release 文件夹，此为可部署文件（JS 文件）

6. 切换至正式版文件夹下

```
cd ./release
```

7. 运行此项目

```
node app
```

或

```
nodemon app
```

8.

此时控制台若出现

```javascript
'Express server is running... 8080'
```

，则证明服务启动成功
