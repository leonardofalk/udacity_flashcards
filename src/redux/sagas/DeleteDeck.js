import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/DeleteDeck';

import { deleteDeck } from '../../services/APIService';

export function* getDeleteDeck(action) {
  const { data } = action;
  const response = yield call(deleteDeck, data);

  if (response.ok) {
    yield put(Actions.DeleteDeckSuccess(response.deck));
  } else {
    yield put(Actions.DeleteDeckFailure(response.error));
  }
}

export default function* DeleteDeckSaga() {
  yield takeEvery('DELETE_DECK_REQUEST', getDeleteDeck);
}
