import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
});

const { Types, Creators } = createActions({
  EditDeckRequest: ['data'],
  EditDeckSuccess: ['payload'],
  EditDeckFailure: ['error'],
});

export const CustomTypes = Types;
export default Creators;

export const request = (state, { data }) => (
  state.merge({ fetching: true, data, payload: null })
);

export const success = (state, { payload }) => (
  state.merge({ fetching: false, error: null, payload })
);

export const failure = (state, { error }) => (
  state.merge({ fetching: false, error, payload: null })
);

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EDIT_DECK_REQUEST]: request,
  [Types.EDIT_DECK_SUCCESS]: success,
  [Types.EDIT_DECK_FAILURE]: failure,
});
