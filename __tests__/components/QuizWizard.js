import React from 'react';

import QuizWizard from '../../src/components/QuizWizard';

import renderer from 'react-test-renderer';

describe('QuizWizard component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<QuizWizard />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
