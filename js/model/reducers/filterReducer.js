/**
 * Created by Zoho on 16/9/15.
 */
import { DEFAULT_STORE } from './rootReducer';

export function searchKeywordReducer(state=DEFAULT_STORE.searchKeyword, action) {
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

export function tagsFilterReducer(state=DEFAULT_STORE.tagFilter, action) {
    if (!action.payload) return state;
    let tagsCopy = null;

    switch (action.type) {
        case 'ADD_PROJECT_FILTER_TAGS':
            tagsCopy = state.project.slice();
            tagsCopy.push(content);
            return {
                ...state,
                project: tagsCopy
            };
        case 'REMOVE_PROJECT_FILTER_TAGS':
            tagsCopy = state.project.slice();
            const removeIndex = tagsCopy.indexOf(content);
            tagsCopy.remove(removeIndex);
            return {
                ...state,
                project: tagsCopy
            };
        default:
            return state
    }
}
