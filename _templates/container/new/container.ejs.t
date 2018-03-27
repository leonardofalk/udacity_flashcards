---
to: src/containers/<%= NAME = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/<%= NAME %>';

class <%= NAME %> extends Component {
  state = {

  }

  componentDidMount = () => {

  }

  render = () => (
    <p>Container Generated Automatically</p>
  )
}

<%= NAME %>.propTypes = {
  // ...
};

<%= NAME %>.defaultProps = {
  // ...
};

<%= NAME %>.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(<%= NAME %>);
