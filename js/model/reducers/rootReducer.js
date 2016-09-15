/**
 * Combine all reducers in this directory
 */
import { combineReducers } from 'redux';

import { flipCardBackReducer } from './flipCardReducer';
import { searchReducer } from './searchReducer';

/******************** Data Structure of Store *******************/
export const DEFAULT_STORE = {
    flipCard: {
        faceUp: true,
        backComponentType: 'div'
    },
    searchKeyword: {
        project: '',
        blog: '',
        gallery: ''
    }
};

/**********************************************************************************/

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
    flipCard: flipCardBackReducer,
    searchKeyword: searchReducer
});

export default reducer;
