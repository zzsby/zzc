 import React from "react";
 import ReactDOMServer from "react-dom/server";

 import { configureToMatchImageSnapshot } from "jest-image-snapshot"; //用来匹配对比图片的

 import Button from '..';

const toMatchSnapshot = configureToMatchImageSnapshot({
    customSnapshotsDir: `${process.cwd()}/snapshots`, //快照存放目录
    customDiffDir: `${process.cwd()}/diffSnapshots`, // 错误快照存放目录
});
expect.extend({ toMatchSnapshot }); // 拓展toMatchSnapshot方法

 describe('测试Button快照', () => {
    it('测试快照是否正确', async () => {
        await jestPuppeteer.resetPage(); //把打开页面 恢复设置
        await page.goto(`file://${process.cwd()}/tests/index.html`); //当前工作目录下
        const html = ReactDOMServer.renderToString(<Button style={{ }}>按钮</Button>);
        await page.evaluate(innerHTML => {
            document.querySelector('#root').innerHTML = innerHTML;
        }, html);

        const screenshot = await page.screenshot();//生成一张新的快照 
        expect(screenshot).toMatchSnapshot();// 去比较新的快照和老的快照是否相同
    })
 });