import { takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/FetchDecks';

import { getDecks } from '../../services/APIService';

export function* getFetchDecks(action) {
  const { data } = action;
  const response = yield call(getDecks, data);

  if (response.ok) {
    yield put(Actions.FetchDecksSuccess(response.decks));
  } else {
    yield put(Actions.FetchDecksFailure(response.error));
  }
}

export default function* FetchDecksSaga() {
  yield takeLatest('FETCH_DECKS_REQUEST', getFetchDecks);
  yield takeLatest('CREATE_DECK_SUCCESS', getFetchDecks);
  yield takeLatest('EDIT_DECK_SUCCESS', getFetchDecks);
}
