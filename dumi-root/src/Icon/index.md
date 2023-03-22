---
group:
  title: 基础
  order: 1
nav:
  title: Components
  path: /components
---

# Icon 图标

图标这里使用了阿里 [iconfont](https://www.iconfont.cn/) 图标库生成了图标，图标来源于坐着 刘付雪妮，结合整理添加了一些其他的图标。

## 使用方式

直接通过设置类名为 iconfont 类名 来使用即可。例如：

```tsx
import { Button,Icon } from 'zzc'
import React from 'react'

const App: React.FC = () => (
  <div className='demo-icon'>
    <i class="iconfont icon-play-fill"></i>
    <i class="iconfont icon-column1"></i>
    <i class="iconfont icon-nightmode-fill"></i>
    <Icon name="icon-color-fill" color="#ff53a5"></Icon>
    <Icon name="icon-loading" class="icon-is-rotating"></Icon>
    <Icon name="icon-coupons-fill" type="button"></Icon>
  </div>

)

export default App
```