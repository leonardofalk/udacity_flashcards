import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import Root from './containers/Root';
import createStore from './redux';
import createDecks from './fixtures/DecksFixtures';
import anticon from './assets/anticon.ttf';

createDecks(false);

class Boot extends Component {
  componentDidMount = () => {
    Font.loadAsync({
      anticon,
    });
  }

  render = () => (
    <Provider store={createStore()}>
      <Root />
    </Provider>
  );
}

export default Boot;
