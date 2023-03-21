const React = require('react');
const Enzyme = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17') // 初始化一个识别器
Enzyme.configure({ adapter: new Adapter() });