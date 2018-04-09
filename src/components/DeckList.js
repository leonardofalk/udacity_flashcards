import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd-mobile';
import { Text } from 'react-native';
import _ from 'lodash';

import styles from './styles/DeckList';
import pluralize from '../services/InflectionService';

const { Item } = List;

class DeckList extends Component {
  _renderListItems = () => {
    const { decks, onClick } = this.props;

    if (_.isEmpty(decks)) {
      return <Item>There are no decks yet</Item>;
    }

    return decks.map(({ title, cards }, key) => (
      <Item
        arrow="horizontal"
        multipleLine
        onClick={onClick(title)}
        platform="android"
        key={key}
      >
        <Text>{title}</Text>
        <Text style={styles.subtitle}>{cards.length} {pluralize('card', cards.length)}</Text>
      </Item>
    ));
  }

  render = () => (
    <List style={styles.container}>
      {this._renderListItems()}
    </List>
  )
}

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};

DeckList.defaultProps = {
  decks: [],
};

export default DeckList;
