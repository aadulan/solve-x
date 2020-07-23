import React from 'react';
import TextBox from '../Components/TextBox/textBox'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextField, Button } from '@material-ui/core';
import {createShallow} from '@material-ui/core/test-utils';
import {act} from 'react-dom/test-utils';
import SnackBar from '../Components/Utils/Snackbar'

    
Enzyme.configure({ adapter: new Adapter() });

 const onChangeEquation = jest.fn()
 const onChangeMessage = jest.fn()
 const onChangeVariant = jest.fn()
 const onChangeOpen = jest.fn()

 const props = {
    onChangeEquation,
    onChangeMessage,
    onChangeVariant,
    onChangeOpen
 }


describe('<TextBox />', () => {
    let shallow;
  
    beforeAll(() => {
      shallow = createShallow();
    });
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<TextBox {...props}
        /> );
    });
  
    const handleStateChange = () => {
    };

const goodInput = [ 'x = 1', '2x+ 3 = 5', '3x+ 5 = 2x+ 9', 'x+ 1 = 3', "1/2x+ 3 = 5"]

it('should empty on correct input', () => {
    goodInput.forEach((t) =>{
        act(() => {
          wrapper.find(TextField).at(0).simulate('change', {target: {value: t}});
          wrapper.find(Button).at(0).simulate('click')
        });
        wrapper.update();
      
        expect(wrapper.find(TextField).at(0).props().value).toBe("")
      });
    }
)

const badInput = ['0', 'x^2 + 3 +4=1', '1=2', 'x', 'y', '-', 'xy=1']

    it('should error when input is wrong ', () => {
        badInput.forEach((t) =>{
            act(() => {
              wrapper.find(TextField).at(0).simulate('change', {target: {value: t}});
              wrapper.find(Button).at(0).simulate('click')
            });
            wrapper.update();
            expect(wrapper.find(TextField).at(0).props().value).toBe(t)
          });

        }

        )
  
  
  });