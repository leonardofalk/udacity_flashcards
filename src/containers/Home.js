import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/Home';

class Home extends Component {
  state = {
    decks: [],
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
