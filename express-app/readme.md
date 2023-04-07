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
init.ts # 初始化文件
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

注意，这一步仅仅是安装第三方 TS 声明，而不是安装第三方 JS 库

```
npm i
```

安装完成后，需要按照 express-app/database/readme.md 的说明来创建两张数据表，主要用于数据的转存

换句话说，运行项目前你要确保你的数据库中有 china 表和 province 表

4. 在 express-app/config 文件夹中更改相应配置

express-app/config 文件夹下有两个文件

-   alpha.ts
-   release.ts

首先需要更改 alpha.ts 中的配置

```typescript
// alpha.ts
const sqlConnection = {
    host: '您的数据库主机，一般为127.0.0.1或localhost',
    user: '您的数据库用户名',
    password: '您的数据库密码',
    database: '您的数据库名称'
}

const config = { sqlConnection }

export default config
```

release.ts 在提交至 git 时已被忽略，所以需要您手动在文件夹（ express-app/config）下新增一个 release.ts 文件，该文件是正式版配置，在将此项目部署到服务器时会用到

release.ts 文件的内容可暂时与 alpha.ts 中的文件内容一致。您只需要在部署项目时再更改 release.ts 文件中的内容即可

5. 编译 ts

```
tsc
```

编译后会在 express-app 目录下自动生成 release 文件夹，此为可部署文件（JS 文件）

6. 切换至正式版文件夹下

```
cd ./release
```

7. 安装依赖

注意，这里是为编译后的项目安装依赖（因为 release 文件夹才是服务器所在的文件夹）

此处安装的是第三方 JS 库，所以需要您手动将 express-app/config 文件夹下的 package.json 移动至该目录下（移动至 express-app/release 目录下）

随后在 express-app/release 目录下安装依赖

```
npm i
```

7. 运行此项目

```
node app
```

8.

此时控制台若出现

```javascript
'Express server is running... 8080'
```

，则证明服务启动成功

## 小 tip

启动项目时可以使用 tsc --watch 以及 nodemon app，这样修改 ts 文件后会自动编译为 js 文件，且服务器会自动刷新，无需手动操作
