/**
 * Created by Zoho on 16/9/2.
 */
/**
 * Combine all reducers in this directory
 */
import { combineReducers } from 'redux';

import flipCard from './flipCardReducer';

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
    flipCard
});

export default reducer;
