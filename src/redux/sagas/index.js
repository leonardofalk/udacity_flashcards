import { fork, all } from 'redux-saga/effects';

import FetchDecksSaga from './FetchDecks';

export default function* rootSaga() {
  yield all([
    fork(FetchDecksSaga),
  ]);
}
