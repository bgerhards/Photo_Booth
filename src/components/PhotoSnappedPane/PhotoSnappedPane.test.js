import React from 'react';
import { shallow } from 'enzyme';
import PhotoSnappedPane from './PhotoSnappedPane';

it('renders without crashing', () => {
  shallow(<PhotoSnappedPane />);
});
