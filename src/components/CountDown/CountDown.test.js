import React from 'react';
import { shallow } from 'enzyme';
import CountDown from './CountDown';

it('renders without crashing', () => {
    const mockSnapPhoto = jest.fn();
  shallow(<CountDown snapPhoto = {mockSnapPhoto}/>);
});
