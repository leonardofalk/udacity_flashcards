import { combineReducers } from 'redux';

import { reducer as fetchDecks } from './FetchDecks';

export default combineReducers({
  fetchDecks,
});
