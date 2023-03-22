import { defineConfig } from 'dumi';
const path = require('path');
const chainWebpack = require('webpack-chain');
const repo = 'zzc';
console.log('chainWebpack', repo);
export default defineConfig({
  title: 'zzc',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    // {
    //   title: '组件',
    //   path: 'components',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    // },
  ],
  // more config: https://d.umijs.org/config
});