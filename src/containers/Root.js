import React from 'react';
import { TabNavigator, SwitchNavigator, StackNavigator } from 'react-navigation';

import Home from './Home';
import Create from './Create';
import Show from './Show';
import TabBar from '../components/TabBar';

const HomeNav = TabNavigator(
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
    initialRouteName: 'Home',
  },
);

const DeckNav = StackNavigator({
  Show: {
    screen: Show,
    navigationOptions: {
      title: 'Deck',
    },
  },
});

const SwitchNav = SwitchNavigator(
  {
    Home,
    HomeNav,
    DeckNav,
  },
  {
    initialRouteName: 'HomeNav',
  },
);

const Root = () => (
  <SwitchNav />
);

export default Root;
