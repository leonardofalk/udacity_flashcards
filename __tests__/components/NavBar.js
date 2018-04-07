import React from 'react';

import NavBar from '../../src/components/NavBar';

import renderer from 'react-test-renderer';

describe('NavBar component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<NavBar />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
