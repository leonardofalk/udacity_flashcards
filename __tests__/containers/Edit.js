import React from 'react'
import configureStore from 'redux-mock-store';
import Edit from '../../src/containers/Edit';
import renderer from 'react-test-renderer';

const createStore = configureStore();

describe('Edit container', () => {
  it('is a generated test', () => {
    const rendered = renderer.create(<Edit store={createStore()} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
