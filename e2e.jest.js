module.exports = {
  verbose: true, //显示详细过程
  testEnvironment: 'jest-environment-puppeteer',  //  运行环境
  setupFiles: ['./tests/setup.js'],
  preset: 'jest-puppeteer', //内置预设无头浏览器
  testMatch: ['**/e2e/**/*.(spec|test).(j|t)sx'], // 匹配文件
};