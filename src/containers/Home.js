import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import _ from 'lodash';

import styles from './styles/Home';
import DeckList from '../components/DeckList';
import { getDecks } from '../services/APIService';
import logger from '../lib/Logger';

class Home extends Component {
  state = {
    fetching: true,
    decks: [],
  }

  componentDidMount = () => {
    getDecks().then(({ decks, ok }) => {
      logger('FETCH_DECKS', decks, ok);

      this.setState({ decks, fetching: !ok });
    });
  }

  onClickDeck = deckID => (
    () => logger(deckID)
  )

  render = () => {
    const { decks, fetching } = this.state;

    if (fetching) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <DeckList decks={decks} onClick={this.onClickDeck} />
      </View>
    );
  }
}

Home.propTypes = {

};

export default Home;
