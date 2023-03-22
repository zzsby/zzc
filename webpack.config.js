const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
//提取CSS文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//当前命令所在目录
const cwd = process.cwd();
module.exports = {
  mode: 'development', // 开发模式
  devtool: false, // 关闭生成sourcemap
  entry: { //入口文件
    ant: './index.js',
  },
  output: {
    path: path.resolve('dist'), // 输出到dist目录
    filename: '[name].js', //打包后的文件
    library: 'ant', // 打包后库的名字
    libraryTarget: 'umd', // 打包后模块的格式 umd amd cmd commonjs commonjs2 window
  },
  externals: { // 组件库代码其实是不需要打包react和react-dom进去的
    react: { // 外部依赖
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // 指定扩展名
    alias: {
      '@scss': resolve('styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/, // 配置如何加载js ts jsx tsx
        exclude: /node_modules/,
        loader: 'babel-loader', // babel.config.js
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 把这些css收集起来后面通过插件写入单独的.css文件中
          {
            loader: 'css-loader', // 处理@import和url
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader', // 加浏览器厂商前缀
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader', // 把scss编译成css
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: true,
            },
          },
        ],
      },
      { // webpack5里面file-loader url-loader已经废弃了
        test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset', // 内置支持了 静态文件不再需要配置loader
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};