import React from 'react';
import Calculator from '../Calculator'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextField, Button, Typography, Grid, Card, CardContent } from '@material-ui/core';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { act } from 'react-dom/test-utils';
import CalculatorButton from '../Components/Calculator/CalculatorButton'


Enzyme.configure({ adapter: new Adapter() });

const onCalChange = jest.fn()
const onMessage = jest.fn()
const onVariant = jest.fn()
const onOpen = jest.fn()
const onEnterChange = jest.fn()

const props = {
  onCalChange,
  onMessage,
  onVariant,
  onOpen,
  onEnterChange
}


describe('<Calculator />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator {...props}
    />);
  });

  
  it('input number 1  ', () => {
    act(() => {
      // console.log(wrapper.debug())
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
    });
    wrapper.update();
    expect(wrapper.find(Typography).find({ className: 'number' }).text()).toBe('1')
    expect(wrapper.find(Typography).find({ className: 'sign' }).text()).toBe('')
  });

  it('input number 11 plus  ', () => {
    act(() => {
      // console.log(wrapper.debug())
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '+' }).dive().find(Button).find({ id: 'cal-button-+' }).simulate('click')
    });
    wrapper.update();
    expect(wrapper.find(Typography).find({ className: 'number' }).text()).toBe('11')
    expect(wrapper.find(Typography).find({ className: 'sign' }).text()).toBe('+')
  });

  it('input number 0 - empty  ', () => {
    act(() => {
      // console.log(wrapper.debug())
      wrapper.find(CalculatorButton).find({ val: '0' }).dive().find(Button).find({ id: 'cal-button-0' }).simulate('click')
      // wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '÷' }).dive().find(Button).find({ id: 'cal-button-÷' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: 'cal' }).dive().find(Button).find({ id: 'cal-button-cal' }).simulate('click')
    });
    wrapper.update();
    expect(wrapper.find(Typography).find({ className: 'number' }).text()).toBe('')
    expect(wrapper.find(Typography).find({ className: 'sign' }).text()).toBe('')
  });

  it('input number 111111 - empty  ', () => {
    act(() => {
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
      wrapper.find(CalculatorButton).find({ val: '1' }).dive().find(Button).find({ id: 'cal-button-1' }).simulate('click')
    });
    wrapper.update();
    expect(wrapper.find(Typography).find({ className: 'number' }).text()).toBe('11111')
    // expect(wrapper.find(Typography).find({ className: 'sign' }).text()).toBe('')
  });

})




