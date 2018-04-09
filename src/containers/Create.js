import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './styles/Create';
import DeckForm from '../components/DeckForm';
import CreateDeckActions from '../redux/reducers/CreateDeck';

class Create extends Component {
  state = {
    submitting: false,
  }

  onSubmitForm = (title) => {
    const { navigation, createDeck } = this.props;

    createDeck({ title });

    navigation.navigate({
      routeName: 'Show',

      params: { deck: { title, cards: [] } },
    });
  }

  render = () => (
    <View style={styles.container}>
      <DeckForm onSubmit={this.onSubmitForm} submitting={this.state.submitting} />
    </View>
  )
}

Create.propTypes = {
  navigation: PropTypes.object.isRequired,
  createDeck: PropTypes.func.isRequired,
};

Create.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  submitting: _.get(state, 'createDeck.fetching') || false,
});

const mapDispatchToProps = dispatch => ({
  createDeck: props => dispatch(CreateDeckActions.CreateDeckRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
