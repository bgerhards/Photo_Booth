import React from 'react';
import { shallow } from 'enzyme';
import InteractionPaneWrapper from './InteractionPaneWrapper';

it('renders without crashing', () => {
  shallow(<InteractionPaneWrapper />);
});
