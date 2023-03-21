import React, { ButtonHTMLAttributes } from 'react'; // ButtonHTMLAttributes button的html属性

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { // HTMLButtonElement  button原生的dom元素
  style: React.CSSProperties,
  children: React.ReactNode
}


const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button>{children}</button>;
}

export default Button;
/** 如果你导出的是个type，会保证在编译阶段去掉，可以进行更好的优化 */
export type { ButtonProps };
