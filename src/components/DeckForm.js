import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, InputItem, Toast, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import _ from 'lodash';

import styles from './styles/DeckForm';

const INITIAL_STATE = {
  hasError: false,
  title: '',
  submitting: false,
};

class DeckForm extends Component {
  state = INITIAL_STATE;

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Title must not be empty');
    }
  }

  onChange = (title) => {
    if (_.isEmpty(title)) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }

    this.setState({
      title,
    });
  }

  onSubmitClick = () => {
    this.setState({ submitting: true });

    this.props.onSubmit(this.state.title).then(() => this.setState(INITIAL_STATE));
  }

  render = () => (
    <WingBlank style={styles.container}>
      <List renderHeader={() => 'Create a New Deck'}>
        <InputItem
          type="text"
          placeholder="Deck title"
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange}
          value={this.state.title}
        >
          Title
        </InputItem>
        <WhiteSpace size="xl" />
        <Button
          disabled={_.isEmpty(this.state.title)}
          type="primary"
          loading={this.state.submitting}
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
};

export default DeckForm;
