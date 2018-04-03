import React from 'react';

import LoadingSpinner from '../../src/components/LoadingSpinner';

import renderer from 'react-test-renderer';

describe('LoadingSpinner component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<LoadingSpinner />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
