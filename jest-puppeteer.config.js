module.exports = {
    launch: {
      dumpio: true,
      headless: process.env.HEADLESS !== 'false', //是否有头
    },
    browserContext: 'default',
  };