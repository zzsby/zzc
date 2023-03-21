import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';
// ComponentStory 组件故事
// ComponentMeta 源数据

import Button from '.';

// button 组件的描述信息
export default {
  title: '通用/Button',
  component: Button
} as ComponentMeta<typeof Button>


// 定义一个组件故事模板
const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

// 基本组件
export const Basic = Template.bind({});
// 定义组建的属性
Basic.args = {
  children: '按钮'
}