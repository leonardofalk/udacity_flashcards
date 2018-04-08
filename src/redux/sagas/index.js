import { fork, all } from 'redux-saga/effects';

import CreateDeckSaga from './CreateDeck';
import EditDeckSaga from './EditDeck';
import FetchDeckSaga from './FetchDeck';
import FetchDecksSaga from './FetchDecks';

export default function* rootSaga() {
  yield all([
    fork(CreateDeckSaga),
    fork(EditDeckSaga),
    fork(FetchDeckSaga),
    fork(FetchDecksSaga),
  ]);
}
