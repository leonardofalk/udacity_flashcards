import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import styles from './styles/Show';
import FetchDeckActions from '../redux/reducers/FetchDeck';
import DeleteDeckActions from '../redux/reducers/DeleteDeck';
import pluralize from '../services/InflectionService';

class Show extends Component {
  state = {
    deck: {},
  }

  componentDidMount = () => {
    const { fetchDeck, navigation } = this.props;
    const { deck } = navigation.state.params;

    this.setState({ deck });

    fetchDeck({ title: deck.title });

    navigation.setParams({
      onBackPress: () => navigation.navigate('Home'),
    });
  }

  navigateToAddCard = () => this.props.navigation.navigate({
    routeName: 'Edit',
    params: {
      title: this.state.deck.title,
    },
  })

  navigateToQuiz = () => this.props.navigation.navigate({
    routeName: 'Quiz',
    params: {
      title: this.state.deck.title,
    },
  })

  destroyDeck = () => {
    const { deck, deleteDeck } = this.state;
    const { navigation } = this.props;

    deleteDeck(deck);
    navigation.goBack();
  }

  render = () => {
    const { deck } = this.state;
    const cardsLength = _.get(deck, 'cards.length', 0);

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={<Text>Name: {deck.title}</Text>}
            extra={<Text>{cardsLength} {pluralize('card', cardsLength)}</Text>}
          />
          <Card.Body>
            <WingBlank size="lg">
              <Button type="primary" inline onClick={this.navigateToQuiz}>
                Start Quiz
              </Button>
              <WhiteSpace />
              <Button type="ghost" inline onClick={this.navigateToAddCard}>
                Add Card
              </Button>
              <WhiteSpace />
              <Button type="warning" inline onClick={this.destroyDeck}>
                Delete Deck
              </Button>
            </WingBlank>
          </Card.Body>
        </Card>
      </WingBlank>
    );
  }
}

Show.propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchDeck: PropTypes.func.isRequired,
};

Show.defaultProps = {
  // ...
};

Show.getDerivedStateFromProps = (nextProps, prevState) => {
  if (!_.isEmpty(_.get(nextProps, 'deck', {}))) {
    return {
      ...prevState,
      ...nextProps,
    };
  }

  return null;
};

const mapStateToProps = state => ({
  deck: _.get(state, 'fetchDeck.payload', {}) || {},
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: props => dispatch(FetchDeckActions.FetchDeckRequest(props)),
  deleteDeck: props => dispatch(DeleteDeckActions.DeleteDeckRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
