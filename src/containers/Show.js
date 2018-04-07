import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import styles from './styles/Show';

class Show extends Component {
  state = {
    deck: {},
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const deck = _.get(navigation, 'state.params.deck', {});

    navigation.setParams({
      onBackPress: () => navigation.navigate('Home'),
    });

    if (!_.isEmpty(deck)) {
      this.setState({ deck });
    }
  }

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
                Take Quiz
              </Button>
              <WhiteSpace />
              <Button type="ghost" inline>
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
};

Show.defaultProps = {
  // ...
};

Show.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
