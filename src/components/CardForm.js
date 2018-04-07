import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, InputItem, Toast, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import _ from 'lodash';

import styles from './styles/DeckForm';

const INITIAL_STATE = {
  questionError: false,
  question: '',
  answerError: false,
  answer: '',
};

class DeckForm extends Component {
  state = INITIAL_STATE;

  onErrorClick = () => {
    if (this.state.questionError) {
      Toast.info('Question must not be empty');
    }

    if (this.state.answerError) {
      Toast.info('Answer must not be empty');
    }
  }

  onChange = prop => (value) => {
    if (_.isEmpty(value)) {
      this.setState({
        [`${prop}Error`]: true,
      });
    } else {
      this.setState({
        [`${prop}Error`]: false,
      });
    }

    this.setState({
      [prop]: value,
    });
  }

  onSubmitClick = () => {
    const { answer, question } = this.state;

    this.props.onSubmit({ answer, question });
    this.setState(INITIAL_STATE);
  }

  render = () => (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <List>
        <InputItem
          type="text"
          placeholder="Card question"
          error={this.state.questionError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange('question')}
          value={this.state.question}
        >
          Question
        </InputItem>
        <WhiteSpace size="sm" />
        <InputItem
          type="text"
          placeholder="Answer"
          error={this.state.answerError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange('answer')}
          value={this.state.answer}
        >
          Answer
        </InputItem>
        <WhiteSpace size="xl" />
        <Button
          disabled={_.isEmpty(this.state.question) || _.isEmpty(this.state.answer)}
          type="primary"
          loading={this.props.submitting}
          onClick={this.onSubmitClick}
        >
          Confirm
        </Button>
      </List>
    </WingBlank>
  )
}

DeckForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default DeckForm;
