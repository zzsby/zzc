// 配置插件和presets
module.exports = {
  presets: [
    '@babel/preset-react', // 把react编译成es5
    [
      '@babel/preset-env', // 把es6编译成es5
      {
        modules: 'auto',
        targets: { // 编译 兼容的目标
          browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript', // 支持typescript
      {
        isTSX: true,
      },
    ],
    ['@babel/plugin-transform-runtime'], // 提供一些编译运行时的帮助方法
  ],
};