import { takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/CreateDeck';

import { createDeck } from '../../services/APIService';

export function* getCreateDeck(action) {
  const { data } = action;
  const response = yield call(createDeck, data);

  if (response.ok) {
    yield put(Actions.CreateDeckSuccess(response));
  } else {
    yield put(Actions.CreateDeckFailure());
  }
}

export default function* CreateDeckSaga() {
  yield takeLatest('CREATE_DECK_REQUEST', getCreateDeck);
}
