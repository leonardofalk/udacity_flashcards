import { combineReducers } from 'redux';

import { reducer as fetchDecks } from './FetchDecks';
import { reducer as createDeck } from './CreateDeck';
import { reducer as editDeck } from './EditDeck';
import { reducer as fetchDeck } from './FetchDeck';

export default combineReducers({
  fetchDecks,
  createDeck,
  editDeck,
  fetchDeck,
});
