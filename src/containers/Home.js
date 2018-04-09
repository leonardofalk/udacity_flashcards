import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import _ from 'lodash';

import styles from './styles/Home';
import DeckList from '../components/DeckList';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchActions from '../redux/reducers/FetchDecks';

class Home extends Component {
  state = {
    fetching: true,
    decks: [],
  }

  componentDidMount = () => {
    const { fetchDecks } = this.props;

    fetchDecks();
  }

  onClickDeck = id => (
    () => this.props.navigation.navigate({
      routeName: 'Show',

      params: { deck: this.state.decks.find(deck => deck.title === id) },
    })
  )

  render = () => {
    const { decks, fetching } = this.state;

    if (fetching) {
      return (
        <View style={styles.container}>
          <LoadingSpinner />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DeckList decks={decks} onClick={this.onClickDeck} />
      </View>
    );
  }
}

Home.propTypes = {
  fetchDecks: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

Home.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  decks: _.get(state, 'fetchDecks.payload', []),
  fetching: _.get(state, 'fetchDecks.fetching', true),
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: props => dispatch(FetchActions.FetchDecksRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
