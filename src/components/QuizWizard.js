import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button, Icon, Toast, WhiteSpace } from 'antd-mobile';

import styles from './styles/QuizWizard';

const finishedMessages = [
  { min: 0, max: 35, message: 'Oopsie! You missed a lot of questions out there. Good luck next time!' },
  { min: 36, max: 69, message: 'Well, although you missed some questions, you did a good job!' },
  { min: 70, max: 95, message: 'Great Job! You are one of the best in the game!!' },
  { min: 96, max: 100, message: 'You are just awesome!! Keep up the good work!' },
];

class QuizWizard extends Component {
  state = {
    currentIndex: 0,
    score: 0,
    finished: false,
  }

  onToggleAnswer = answer => () => Toast.info(answer);

  onClickCorrect = () => this.increment(true)

  onClickIncorrect = () => this.increment()

  increment = (incrementScore = false) => {
    const { deck } = this.props;
    const { currentIndex, score } = this.state;
    const finished = currentIndex + 1 >= deck.cards.length;

    this.setState({
      currentIndex: currentIndex + 1,
      score: (incrementScore ? score + 1 : score),
      finished,
    });
  }

  _renderScoreMessage = () => {
    const { score } = this.state;
    const { deck } = this.props;
    const total = deck.cards.length;
    const average = (score * 100.0 / total); /* eslint-disable-line no-mixed-operators */
    const message = finishedMessages.filter(({ min, max }) => (
      average >= min && average <= max)).map(m => m.message);

    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreMessage}>
          {message.join()}
        </Text>
        <WhiteSpace size="lg" />
        <Text style={styles.scoreMessage}>
          Your score was {score}/{total} ({average.toString().substring(0, 5)} %)
        </Text>
        <WhiteSpace size="lg" />
        <Icon color="#52c41a" type="check-circle-o" />
      </View>
    );
  }

  render = () => {
    const { deck } = this.props;
    const { finished, currentIndex } = this.state;

    const decksToRender = deck.cards.map((card, key) => (
      <View key={key}>
        <Text>{card.question}</Text>
        <WhiteSpace size="lg" />
        <Button inline type="ghost" size="small" onClick={this.onToggleAnswer(card.answer)}>Show Answer</Button>
        <WhiteSpace size="lg" />
        <Button inline type="primary" onClick={this.onClickCorrect}>
          Correct
        </Button>
        <WhiteSpace size="sm" />
        <Button inline type="warning" onClick={this.onClickIncorrect}>
          Incorrect
        </Button>
      </View>
    ));

    if (!finished) {
      return (
        <View style={styles.pagination}>
          <Text style={styles.paginationText}>{currentIndex + 1} of {deck.cards.length} cards</Text>
          <WhiteSpace size="lg" />
          {decksToRender[currentIndex]}
        </View>
      );
    }

    return this._renderScoreMessage();
  }
}

QuizWizard.propTypes = {
  deck: PropTypes.object.isRequired,
};

export default QuizWizard;
