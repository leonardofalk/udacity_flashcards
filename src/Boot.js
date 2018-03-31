import React from 'react';
import { Provider } from 'react-redux';

import Root from './containers/Root';
import createStore from './redux';
import createDecks from './fixtures/DecksFixtures';

createDecks(false);

const Boot = () => (
  <Provider store={createStore()}>
    <Root />
  </Provider>
);

export default Boot;
