/**
 * Created by Zoho on 16/9/2.
 */
/**
 * Combine all reducers in this directory
 */
import { combineReducers } from 'redux';

import flipCardBackReducer from './flipCardReducer';

/******************** Data Structure of Store *******************/
export const DEFAULT_STORE = {
    flipCard: {
        faceUp: true,
        backComponentType: 'div'
    }
};

/**********************************************************************************/

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
    flipCard: flipCardBackReducer
});

export default reducer;
