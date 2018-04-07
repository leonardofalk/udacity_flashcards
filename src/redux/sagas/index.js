import { fork, all } from 'redux-saga/effects';

import CreateDeckSaga from './CreateDeck';
import FetchDecksSaga from './FetchDecks';

export default function* rootSaga() {
  yield all([
    fork(FetchDecksSaga),
    fork(CreateDeckSaga),
  ]);
}
