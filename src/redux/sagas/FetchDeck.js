import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/FetchDeck';

import { getDeck } from '../../services/APIService';

export function* getFetchDeck(action) {
  const { data } = action;
  const response = yield call(getDeck, data);

  if (response.ok) {
    yield put(Actions.FetchDeckSuccess(response.deck));
  } else {
    yield put(Actions.FetchDeckFailure(response.error));
  }
}

export function* getFetchDeckFromEdit(action) {
  const { title } = action.payload;

  const response = yield call(getDeck, { title });

  if (response.ok) {
    yield put(Actions.FetchDeckSuccess(response.deck));
  } else {
    yield put(Actions.FetchDeckFailure(response.error));
  }
}

export default function* FetchDeckSaga() {
  yield takeEvery('EDIT_DECK_SUCCESS', getFetchDeckFromEdit);
  yield takeEvery('FETCH_DECK_REQUEST', getFetchDeck);
}
