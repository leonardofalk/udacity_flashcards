import React from 'react';

import TabBar from '../../src/components/TabBar';

import renderer from 'react-test-renderer';

describe('TabBar component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<TabBar />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
