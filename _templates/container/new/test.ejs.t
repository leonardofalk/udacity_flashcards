---
to: __tests__/containers/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React from 'react'
import configureStore from 'redux-mock-store';
import <%= NAME %> from '../../src/containers/<%= NAME %>';
import renderer from 'react-test-renderer';

const createStore = configureStore();

describe('<%= name %> container', () => {
  it('is a generated test', () => {
    const rendered = renderer.create(<<%= NAME %> store={createStore()} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
