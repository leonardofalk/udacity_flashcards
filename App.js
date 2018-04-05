import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';

import Boot from './src/Boot';

import './reactotron.config';

class App extends Component {
  state = {
    fontsLoaded: false,
  }

  _loadFonts = async () => {
    await Font.loadAsync({
      anticon: await import('./src/fonts/anticon.ttf'),
    });
  }

  render = () => {
    if (this.state.fontsLoaded) {
      return <Boot />;
    }

    return (
      <AppLoading
        startAsync={this._loadFonts}
        onFinish={() => this.setState({ fontsLoaded: true })}
      />
    );
  }
}

export default App;
