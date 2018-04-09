import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import styles from './styles/Quiz';
import { registerQuizAnalytics } from '../services/APIService';
import { restartNotificationService } from '../services/NotificationService';
import FetchDeckActions from '../redux/reducers/FetchDeck';
import QuizWizard from '../components/QuizWizard';
import LoadingSpinner from '../components/LoadingSpinner';

class Quiz extends Component {
  state = {
    deck: {},
    fetching: true,
  }

  componentDidMount = () => {
    const { fetchDeck, navigation } = this.props;
    const { title } = navigation.state.params;

    fetchDeck({ title });

    registerQuizAnalytics();
    restartNotificationService();

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
    const { deck, fetching } = this.state;
    const { navigation } = this.props;

    if (fetching) {
      return <LoadingSpinner />;
    }

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <QuizWizard deck={deck} navigation={navigation} />
      </WingBlank>
    );
  }
}

Quiz.propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchDeck: PropTypes.func.isRequired,
};

Quiz.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  deck: _.get(state, 'fetchDeck.payload', {}) || {},
  fetching: _.get(state, 'fetchDeck.fetching', false),
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: props => dispatch(FetchDeckActions.FetchDeckRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
