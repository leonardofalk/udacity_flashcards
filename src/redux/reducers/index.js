import { combineReducers } from 'redux';

import { reducer as createDeck } from './CreateDeck';
import { reducer as deleteDeck } from './DeleteDeck';
import { reducer as editDeck } from './EditDeck';
import { reducer as fetchDeck } from './FetchDeck';
import { reducer as fetchDecks } from './FetchDecks';

export default combineReducers({
  createDeck,
  deleteDeck,
  editDeck,
  fetchDeck,
  fetchDecks,
});
