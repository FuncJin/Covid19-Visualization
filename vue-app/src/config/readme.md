# alpha or release

切换环境时只需暴露不同的配置文件即可

```typescript
/** 正式版 */
const release = {
    url: 'Enter the address of your api request, such as http://127.0.0.1:8080',
    amap: {
        key: 'Enter your Amap key here, required!',
        securityJsCode: 'Enter your Amap securityJsCode here, required!'
    }
}

export default release
```
