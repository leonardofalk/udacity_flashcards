import React from 'react';
import { Provider } from 'react-redux';

import createStore from './redux';
import Root from './containers/Root';
import createDecks from './fixtures/DecksFixtures';

createDecks(false); // create fixtures for the first development run

const Boot = () => (
  <Provider store={createStore()}>
    <Root />
  </Provider>
);

export default Boot;
