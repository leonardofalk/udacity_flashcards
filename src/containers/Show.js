import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/Show';

class Show extends Component {
  state = {

  }

  componentDidMount = () => {

  }

  render = () => (
    <Text>Container Generated Automatically</Text>
  )
}

Show.propTypes = {
  // ...
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
