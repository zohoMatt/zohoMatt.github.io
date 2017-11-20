/**
 * Combine all reducers in this directory
 */
import { combineReducers } from 'redux';

import { flipCardBackReducer } from './contact/flipCardReducer';
import { searchKeywordReducer } from './shared/searchReducer';
import { tagsFilterReducer } from './shared/tagReducer';

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
  flipCard: flipCardBackReducer,
  searchKeyword: searchKeywordReducer,
  tagFilter: tagsFilterReducer,
});

export default reducer;
