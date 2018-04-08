import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import styles from './styles/Show';
import FetchDeckActions from '../redux/reducers/FetchDeck';

class Show extends Component {
  state = {
    deck: {},
  }

  componentDidMount = () => {
    const { fetchDeck, navigation } = this.props;
    const { title } = navigation.state.params.deck;

    fetchDeck({ title });

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

  render = () => {
    const { deck } = this.state;

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={<Text>Name: {deck.title}</Text>}
            extra={<Text>{_.get(deck, 'cards.length', 0)} cards</Text>}
          />
          <Card.Body>
            <WingBlank size="lg">
              <Button type="primary" inline>
                Start Quiz
              </Button>
              <WhiteSpace />
              <Button type="ghost" inline onClick={this.navigateToAddCard}>
                Add Card
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

Show.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  deck: _.get(state, 'fetchDeck.payload', {}) || {},
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: props => dispatch(FetchDeckActions.FetchDeckRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
