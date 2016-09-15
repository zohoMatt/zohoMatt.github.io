/**
 * Created by Zoho on 16/9/15.
 */
import { DEFAULT_STORE } from './rootReducer';

export function searchReducer(state=DEFAULT_STORE.searchKeyword, action) {
    switch (action.type) {
        case 'SEARCH_PROJECT':
            return {
                ...state,
                project: action.payload
            };
        case 'SEARCH_BLOG':
            return {
                ...state,
                blog: action.payload
            };
        case 'SEARCH_GALLERY':
            return {
                ...state,
                gallery: action.payload
            };
        default:
            return state;
    }
}
