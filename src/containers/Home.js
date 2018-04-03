import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import _ from 'lodash';

import styles from './styles/Home';
import DeckActions from '../redux/reducers/FetchDecks';
import LoadingSpinner from '../components/LoadingSpinner';

class Home extends Component {
  state = {
    fetching: true,
    decks: [],
  }

  componentDidMount = () => {
    const { fetchDecks } = this.props;

    fetchDecks();
  }

  componentWillReceiveProps = (props) => {
    if (!_.eq(this.state, props)) {
      this.setState({ ...this.state, ...props });
    }
  }

  render = () => {
    const { decks, fetching } = this.state;

    if (fetching) {
      return <LoadingSpinner />;
    }

    return (
      <View style={styles.container}>
        <Text>{decks.map(({ title }) => title).join(' ')}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: _.get(state, 'fetchDecks.payload.decks', []),
  fetching: _.get(state, 'fetchDecks.fetching', false),
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(DeckActions.FetchDecksRequest()),
});

Home.propTypes = {
  fetchDecks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
