import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles/Create';
import DeckForm from '../components/DeckForm';
import logger from '../lib/Logger';
import { createDeck } from '../services/APIService';

class Create extends Component {
  onSubmitForm = async (title) => {
    const { navigation } = this.props;

    logger(title);

    const { ok } = await createDeck({ title });

    if (ok) {
      navigation.navigate('Home');
    }
  }

  render = () => (
    <View style={styles.container}>
      <DeckForm onSubmit={this.onSubmitForm} />
    </View>
  )
}

Create.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Create;
