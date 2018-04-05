import React from 'react';

import DeckList from '../../src/components/DeckList';

import renderer from 'react-test-renderer';

describe('DeckList component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<DeckList />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
