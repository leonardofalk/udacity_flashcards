import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/Home';
import FixtureService from '../services/FixtureService';
import { getDecks } from '../services/APIService';

class Home extends Component {
  state = {
    decks: [],
  }

  componentDidMount = () => {
    FixtureService();
    getDecks().then((decks) => {
      console.log(decks);
      this.setState({ decks });
    });
  }

  render = () => {
    const { decks } = this.state;

    return (
      <View style={styles.container}>
        <Text>{decks.map(({ title }) => title).join(' ')}</Text>
      </View>
    );
  }
}

export default Home;
