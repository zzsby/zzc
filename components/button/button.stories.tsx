import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import '../../styles/index.scss';

import Button from ".";

export default {
  title: "通用/Button(按钮)",
  component: Button,
  argTypes: {
    size: { description:'点击取消后的回调事件', default:'lg', control: { type: 'select', options: ['lg', 'sm'] } },
    btnType: { control: { type: 'select', options: ['primary', 'default', 'danger', 'link'] } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button  {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: "按钮",
  btnType: 'default'
};