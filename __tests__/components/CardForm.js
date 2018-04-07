import React from 'react';

import CardForm from '../../src/components/CardForm';

import renderer from 'react-test-renderer';

describe('CardForm component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CardForm />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
