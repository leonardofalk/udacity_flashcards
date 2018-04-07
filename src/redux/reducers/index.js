import { combineReducers } from 'redux';

import { reducer as fetchDecks } from './FetchDecks';
import { reducer as createDeck } from './CreateDeck';

export default combineReducers({
  fetchDecks,
  createDeck,
});
