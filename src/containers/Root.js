import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './Home';

const Navigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Quiz',
      },
    },
    CreateDecks: {
      screen: Home,
      navigationOptions: {
        title: 'Create Decks',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Root = () => (
  <Navigator />
);

export default Root;
