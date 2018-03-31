import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/Home';
import { getDecks } from '../services/APIService';

class Home extends Component {
  state = {
    decks: [],
  }

  componentDidMount = async () => {
    const { decks } = await getDecks();

    console.info('RESPONSE', decks);

    this.setState({ decks });
  }

  render = () => {
    const { decks } = this.state;

    return (
      <View style={[styles.container, { marginTop: 100 }]}>
        <Text>{decks.map(({ title }) => title).join(' ')}</Text>
      </View>
    );
  }
}

export default Home;
