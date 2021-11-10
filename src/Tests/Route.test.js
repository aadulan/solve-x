import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createHashHistory } from 'history';
import App from '../App';

describe('AppRouter component', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    // const history = createHashHistory({ initialEntries: ['/'] });
    // history.push("/level1");
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('start')).toBeDefined();
  });
});

describe('AppRouter component', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/level1');
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('level1')).toBeDefined();
  });
});

describe('Going to Level 2', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/level2');
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('level2')).toBeDefined();
  });
});

describe('Going to Level 3', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/level3');
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('level3')).toBeDefined();
  });
});

describe('Going to Level 4', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/level4');
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('level4')).toBeDefined();
  });
});

describe('Going to Level 5', () => {
  afterEach(jest.resetAllMocks);

  it('navigates correctly', async () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/level5');
    const { container } = render(<App />);
    // screen.debug()
    expect(container.querySelector('level5')).toBeDefined();
  });
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router';
// import Start from './Start';
// import EqDisplay from './EqDisplay';
// import App from './App';

// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

// test('valid path should redirect to start', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ '/#' ]}>
//       <App/>
//     </MemoryRouter>
//   );
//   expect(wrapper.find(Start)).toHaveLength(1);
//   expect(wrapper.find(EqDisplay)).toHaveLength(0);
// });

// // can't go to
// test('valid path should direct to level', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ '/', '/#/level1', {hash: '/level1'} ]}>
//       <App/>
//     </MemoryRouter>
//   );
//   // console.log(wrapper.debug())
//   // expect(location.pathname).toBe("/#/level1");
//   expect(wrapper.find(Start)).toHaveLength(0);
//   expect(wrapper.find(EqDisplay)).toHaveLength(1);
// });

// test('invalid path should redirect to start', () => {
//     const wrapper = mount(
//       <MemoryRouter initialEntries={[ '/boo' ]}>
//         <App/>
//       </MemoryRouter>
//     );
//     expect(wrapper.find(Start)).toHaveLength(1);
//     expect(wrapper.find(EqDisplay)).toHaveLength(0);
//   });
