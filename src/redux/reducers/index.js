import { combineReducers } from 'redux';

import { reducer as fetchDecks } from './FetchDecks';
import { reducer as createDeck } from './CreateDeck';
import { reducer as editDeck } from './EditDeck';

export default combineReducers({
  fetchDecks,
  createDeck,
  editDeck,
});
