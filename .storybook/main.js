const path = require('path');

module.exports = {

  // 配置引入组件的路径
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  // 添加需要引入的组件
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/preset-create-react-app"
  ],
};