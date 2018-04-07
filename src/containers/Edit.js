import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import styles from './styles/Edit';
import EditDeckActions from '../redux/reducers/EditDeck';
import CardForm from '../components/CardForm';

class Edit extends Component {
  state = {
    submitting: false,
  }

  onSubmitForm = (card) => {
    const { updateDeck, navigation } = this.props;
    const { title } = navigation.state.params;
    const props = { title, card };

    console.info('UPDATE DECK WITH PROPS', props);

    updateDeck(props);
  }

  render = () => (
    <CardForm submitting={this.state.submitting} onSubmit={this.onSubmitForm} />
  )
}

Edit.propTypes = {
  updateDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

Edit.getDerivedStateFromProps = (nextProps, prevState) => ({
  ...prevState,
  ...nextProps,
});

const mapStateToProps = state => ({
  submitting: _.get(state, 'editDeck.fetching') || false,
});

const mapDispatchToProps = dispatch => ({
  updateDeck: props => dispatch(EditDeckActions.EditDeckRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
