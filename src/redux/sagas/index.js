import { fork, all } from 'redux-saga/effects';

import CreateDeckSaga from './CreateDeck';
import DeleteDeckSaga from './DeleteDeck';
import EditDeckSaga from './EditDeck';
import FetchDeckSaga from './FetchDeck';
import FetchDecksSaga from './FetchDecks';

export default function* rootSaga() {
  yield all([
    fork(CreateDeckSaga),
    fork(DeleteDeckSaga),
    fork(EditDeckSaga),
    fork(FetchDeckSaga),
    fork(FetchDecksSaga),
  ]);
}
