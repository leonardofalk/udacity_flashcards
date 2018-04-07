import React from 'react'
import configureStore from 'redux-mock-store';
import Show from '../../src/containers/Show';
import renderer from 'react-test-renderer';

const createStore = configureStore();

describe('Show container', () => {
  it('is a generated test', () => {
    const rendered = renderer.create(<Show store={createStore()} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
