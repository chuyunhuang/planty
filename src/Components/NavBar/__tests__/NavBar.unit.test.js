import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../NavBar';

test('render navbar', () => {
  const wrapper = shallow(
    <Navbar />
  );
  expect(wrapper).toMatchSnapshot();
})

