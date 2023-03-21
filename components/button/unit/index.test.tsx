import React from 'react';
import { mount } from 'enzyme';
import Button from '..';

describe('测试Button', () => {
  it('测试button是否能够正确挂载', () => {
    // 期待挂载button组件的过程中不要抛出错误
    expect(() => mount(<Button style={{}}>Follow</Button>)).not.toThrow();
  });
});