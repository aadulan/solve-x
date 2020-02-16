import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Start from './Start';
import EqDisplay from './EqDisplay';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
    
Enzyme.configure({ adapter: new Adapter() });


test('valid path should redirect to start', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Start)).toHaveLength(1);
  expect(wrapper.find(EqDisplay)).toHaveLength(0);
});

// can't go to 
test('valid path should direct to start', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/solve' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Start)).toHaveLength(1);
  expect(wrapper.find(EqDisplay)).toHaveLength(0);
});

test('invalid path should redirect to start', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/boo' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Start)).toHaveLength(1);
    expect(wrapper.find(EqDisplay)).toHaveLength(0);
  });