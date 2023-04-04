# alpha or release

切换环境时只需暴露不同的配置文件即可

```typescript
// 正式版

/** 数据库连接对象 */
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
