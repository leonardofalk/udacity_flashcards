import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Create from './Create';
import Edit from './Edit';
import Home from './Home';
import Quiz from './Quiz';
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
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: 'Add Card',
    },
  },
  Home: {
    screen: HomeNav,
  },
}, {
  initialRouteName: 'Home',
});

const Root = () => (
  <DeckNav />
);

export default Root;
