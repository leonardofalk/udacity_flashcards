import React from 'react';

import DeckForm from '../../src/components/DeckForm';

import renderer from 'react-test-renderer';

describe('DeckForm component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<DeckForm />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
