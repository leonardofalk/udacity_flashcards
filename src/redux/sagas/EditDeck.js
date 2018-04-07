import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/EditDeck';

import { updateDeck } from '../../services/APIService';

export function* getEditDeck(action) {
  const { data } = action;
  const response = yield call(updateDeck, data);

  if (response.ok) {
    yield put(Actions.EditDeckSuccess(response));
  } else {
    yield put(Actions.EditDeckFailure(response));
  }
}

export default function* EditDeckSaga() {
  yield takeEvery('EDIT_DECK_REQUEST', getEditDeck);
}
