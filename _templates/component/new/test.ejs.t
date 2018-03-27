---
to: __tests__/components/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React from 'react';

import <%= NAME %> from '../../src/components/<%= NAME %>';

import renderer from 'react-test-renderer';

describe('<%= name %> component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<<%= NAME %> />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
