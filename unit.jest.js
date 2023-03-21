module.exports = {
  verbose: true, // 显示日志
  testEnvironment: 'jsdom', // 运行测试的环境
  setupFiles: ['./tests/setup.js'], // 建立初始化文件
  testMatch: ['**/unit/**/*.(spec|test).(js|ts|jsx|tsx)'], //文件匹配模式
  collectCoverage: true, // 会生成一个coverage的目录
  collectCoverageFrom: [//文件匹配规则
    'components/**/*.(js|ts|jsx|tsx)',
    '!components/**/*.stories.(js|ts|jsx|tsx)',
    '!components/**/*.(spec|test).(js|ts|jsx|tsx)',
  ],
};