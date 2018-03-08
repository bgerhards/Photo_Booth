import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

it('renders without crashing', () => {
  shallow(<Video />);
});
