import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {

    it('renders without crashing', () => {
        shallow(<Button>Foobar</Button>);
    });

    it('renders text', () => {
        const wrapper = shallow(<Button>Foobar</Button>);
        
        expect(wrapper.contains('Foobar')).toEqual(true);
    });

    it('disabled when passed in Button', () => {
        const wrapper = shallow(<Button disabled={true}>Foobar</Button>);

        expect(wrapper.prop('disabled')).toEqual(true);
    });

    it('enables by default', () => {
        const wrapper = shallow(<Button>Foobar</Button>);

        expect(wrapper.prop('disabled')).toEqual(false);
    });

    it('executes onClick prop handler on click', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<Button onClick={mockOnClick}>Foobar</Button>);
        
        wrapper.simulate('click');

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
