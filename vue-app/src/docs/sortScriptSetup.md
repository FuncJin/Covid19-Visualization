# script setup 顺序说明

1. import 导入
2. 自定义 TS 类型/声明
3. 解构赋值
4. 与参数相关的操作(例如 props、emits、inject 等)
5. 定义非响应式数据或初始化数据
6. 定义响应式数据
7. 工具或处理函数
8. 生命周期等相关钩子(例如 watch、onMounted)
9. 工具函数

> 每个分类之间以换行符进行分隔

# script setup 顺序举例

```typescript
import { ref, watch, onMounted } from 'vue'

import Custom from '@utils'
import pubsub from '@pubsub'

type CustomType = {
    name: string
    adcode: string
}

type Props = { arg: any }
type Emits = { (e: 'ev1', d: any): void }

const { getGeo } = Custom

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const custom = inject('key', 'defaultValue')

const init = 0

const counts = ref(0)

const inc = () => counts.value++

watch(init, (i) => i)
onMounted(() => {})

pubsub.publish('key', 'value')
```
