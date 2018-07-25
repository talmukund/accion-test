import React from 'react';
import LandingPage from './LandingPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

const props = {}

it('renders correctly', () => {
    const wrapper = shallow(<LandingPage />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
});