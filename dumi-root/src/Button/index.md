---
group:
  title: 基础
  order: 1
nav:
  title: Components
  path: /Button
---

# Button 按钮

按钮用于开始一个即时操作。

## 不同状态

使用 `btnType` 可以设置不同状态的按钮样式

```tsx
import React from 'react'
import { Button } from 'zzc'

const App: React.FC = () => (
  <>
    <Button btnType='primary'>Primary</Button>
    <Button btnType='default'>default</Button>
    <Button btnType='danger'>danger</Button>
    <Button btnType='link'>link</Button>
  </>
)

export default App
```

## 不同尺寸

Button `size` 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。

```tsx
import React from 'react'
import { Button } from 'zzc'


const App: React.FC = () => (
  <>
  <div className="margin-6-0">
    <Button size="lg">Large</Button>
    <Button>Default</Button>
    <Button size="sm">Small</Button>
  </div>
  </>
)

export default App
```

## 禁用状态

添加 `disabled` 属性即可让按钮处于禁用状态。

```tsx
import React from 'react';
import { Button } from 'zzc';


const App: React.FC = () => {

  return (
    <>
        <Button disabled >
          disabled
        </Button>
    </>
  );
};

export default App;
```

## Button Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | lg / sm  | — |
| btnType | 类型 | string | primary / default / danger / link | — |
| href | 配合btnType为link是使用 | string | — | "" |
| disabled | 是否禁用状态 | boolean | — | false |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
