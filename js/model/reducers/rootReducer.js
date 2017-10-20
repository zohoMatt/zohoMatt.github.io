/**
 * Combine all reducers in this directory
 */
import {combineReducers} from 'redux';

import {flipCardBackReducer} from './flipCardReducer';
import {searchKeywordReducer, tagsFilterReducer} from './filterReducer';

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
  flipCard: flipCardBackReducer,
  searchKeyword: searchKeywordReducer,
  tagFilter: tagsFilterReducer,
});

export default reducer;
