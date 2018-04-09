import React from 'react'
import configureStore from 'redux-mock-store';
import Quiz from '../../src/containers/Quiz';
import renderer from 'react-test-renderer';

const createStore = configureStore();

describe('Quiz container', () => {
  it('is a generated test', () => {
    const rendered = renderer.create(<Quiz store={createStore()} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
