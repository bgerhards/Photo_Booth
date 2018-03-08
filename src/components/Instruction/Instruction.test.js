import React from 'react';
import { shallow } from 'enzyme';
import Instruction from './Instruction';

it('renders without crashing', () => {
  shallow(<Instruction />);
});
