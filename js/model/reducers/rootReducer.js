/**
 * Combine all reducers in this directory
 */
import {combineReducers} from 'redux';

import {flipCardBackReducer} from './flipCardReducer';
import {searchKeywordReducer, tagsFilterReducer} from './filterReducer';

/******************** Data Structure of Store *******************/
export const DEFAULT_STORE = {
  flipCard: {
    faceUp: true,
    backComponentType: 'div',
  },
  searchKeyword: {
    project: '',
    blog: '',
    gallery: '',
  },
  tagFilter: {
    project: [],
    blog: [],
    gallery: [],
  },
};

/**********************************************************************************/

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
  flipCard: flipCardBackReducer,
  searchKeyword: searchKeywordReducer,
  tagFilter: tagsFilterReducer,
});

export default reducer;
