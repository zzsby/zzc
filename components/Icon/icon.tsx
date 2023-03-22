// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import './fontcss/iconfont.css'
interface Iprops {
  name: string //class 名称
  size: number | string // 图标大小
  color: string // 字体颜色
}
function Icon(props: any) {
  // 解构 porps
  const { name, size, color }: Iprops = props
  // style 对象 用于每次都更新props值实现数据重载（可理解为浅拷贝）
  const [styleObj, setStyleObj]: any = useState({
    fontSize: 16,
    color: ''
  })
  // 图标点击事件 触发props回弹
  function handleClick(e: any) {
    // 判断props有没有传递 onClick 事件，如果有的话就触发
    props.onClick && props.onClick(e)
  }
  useEffect(() => {
    if (size) {
      setStyleObj({
        fontSize: `${size}px`,
        // width: '18px',
        // height: '18px',
        
        color: color
      })
    }
    if (color) {
      setStyleObj({
        fontSize: `${size}px`,
        color: color
      })
    }
  }, [size, color]) // 监听size，color 严格意义上来说监听的是 props.size,props.color, 不过这样问题也不大 因为解构了每次styleObj保持的都是最新数据
  return (
    <i
      {...props}
      onClick={handleClick}
      className={['tb-icon', 'iconfont', name].join(' ')}
      style={styleObj}
    ></i>
  )
}
export default Icon
