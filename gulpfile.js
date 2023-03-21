const gulp = require('gulp'); //定义执行任务
const path = require('path'); //处理路径
const rimraf = require('rimraf'); // 删除 rm -rf

const ts = require('gulp-typescript'); //编译ts
const babel = require('gulp-babel'); // es6编译成es5
const merfes2 = require('merge2'); //合并流  Promise.all
const { compilerOptions } = require('./tsconfig.json');
const tsConfig = {
    noUnusedParameters: true, //不能有未使用的参数
    noUnusedLocals: true, // 不能有未使用的本地变量 
    strictNullChecks: true, // 严格的Null检查
    target: 'es6',// 编译的目标
    jsx: 'react',  // jsx如何处理  preserve 保留不处理 react变成 React.createElement()
    moduleResolution: 'node', // 模块的查找规则 node方式
    declaration: true, // 生成声明文件 d.ts
    allowSyntheticDefaultImports: true, //允许默认导入
    ...compilerOptions,
    
  };

const babelConfig = require('./babel.config');

//要编译的文件
// glob 文件匹配模板,类似正则
const source = [
    'components/**/*.{js,ts,jsx,tsx}',
    '!components/**/*.stories.{js,ts,jsx,tsx}',
    '!components/**/e2e/*',
    '!components/**/unit/*',
  ];
// E:\组件库\components
const base = path.join(process.cwd(), 'components');
 
function getProjectPath(filePath) {
    return path.join(process.cwd(), filePath);
}
// E:\组件库\lib
const libDir = getProjectPath('lib');
// E:\组件库\es
const esDir = getProjectPath('es');
/**
 * 执行编译 只编译不打包
 * @param {*} modules 是否要转换模块
 */
function compile(modules) {
   const targeDir = modules === false ? esDir : libDir;
   rimraf.sync(targeDir); //删除老的内容
   // 把文件匹配模式传给gulp，gulp会按照这个模式把文件匹配出来
   // ts转译后会生成两个流，一个流是JS一个流是类型声明d.ts
   const {js, dts} = gulp.src(source,{base}).pipe(ts(tsConfig));
   let dtsStream = dts.pipe(gulp.dest(targeDir)); // 把类型声明文件写到目录里去
   let jsStream = js;
   if(modules) { //如果要转成es5, 就用babel进行转译
    jsStream = js.pipe(babel(babelConfig));
   }
   jsStream=jsStream.pipe(gulp.dest(targeDir));
   return merfes2([jsStream, dtsStream]);
}

// 编译es
gulp.task('compile-with-es', (done) => {
  console.log('complie to es');
  compile(false).on('finish', done);
});
// 编译js es5
gulp.task('compile-with-lib', (done) => {
  console.log('complie to js');
  compile(true).on('finish', done);
});

gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'));
