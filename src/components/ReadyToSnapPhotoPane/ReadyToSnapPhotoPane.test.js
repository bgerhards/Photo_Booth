import React from 'react';
import { shallow } from 'enzyme';
import ReadyToSnapPhotoPane from './ReadyToSnapPhotoPane';

it('renders without crashing', () => {
  shallow(<ReadyToSnapPhotoPane />);
});
