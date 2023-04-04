# import 导入顺序说明

1. 第三方库
2. 第三方组件
3. 自己的组件(components)
4. 自己的组件(views)
5. 工具函数、配置项，或其它辅助性功能函数
6. Http Api 接口
7. 第三方 TS 声明
8. 自己的 TS 声明
9. 第三方 CSS/LESS 文件
10. 自己的 CSS/LESS 文件
11. 媒体文件

> 每个分类之间以换行符进行分隔。每个大分类之间，相对路径始终在最下方，且没有换行。Http Api 分类的后缀为“xxxHttpApi”

# import 导入顺序举例

```typescript
import { ref } from 'vue'

import Drawer from '@components/Drawer'

import Drawer from '@views/Echarts/Bar'

import utils from '@utils/i18n'

import customHttpApi from '@api/cities'

import { PropType } from 'vue'

import type { Covid19Data } from '@api/interface'
import type { Custom } from './interface'

import '@assets/style/theme.less'

import icon from './icon.png'
```
