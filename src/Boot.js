import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';

import Root from './containers/Root';
import createStore from './redux';
import createDecks from './fixtures/DecksFixtures';

createDecks(false);

class Boot extends Component {
  state = {
    fontsLoaded: false,
  }

  componentWillMount = async () => {
    await Font.loadAsync({
      anticon: require('./fonts/anticon.ttf'), /* eslint-disable-line global-require */
    });

    this.setState({ fontsLoaded: true });
  }

  render = () => {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={createStore()}>
          <Root />
        </Provider>
      );
    }

    return <AppLoading />;
  }
}

export default Boot;
