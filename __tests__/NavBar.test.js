import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../client/components/NavBar';

describe('<NavBar />', () => {
  it('renders', () => {
    expect(shallow(<NavBar />)).toBeTruthy;
  });
});
