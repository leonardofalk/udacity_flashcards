import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Create from './Create';
import TabBar from '../components/TabBar';

const Navigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Decks',
      },
    },
    CreateDecks: {
      screen: Create,
      navigationOptions: {
        title: 'Create Decks',
      },
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    tabBarPosition: 'bottom',
  },
);

const Root = () => (
  <Navigator />
);

export default Root;
