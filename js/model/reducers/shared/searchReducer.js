/**
 * Created by Zoho on 16/9/15.
 */
import { DEFAULT_STORE } from '$store/default';

import {
    ProjectActions,
    BlogActions,
    GalleryActions,
} from 'JS/model/actions/types';

// Search keyword. Including all major sub-pages.
export function searchKeywordReducer (
    state = DEFAULT_STORE.searchKeyword, action) {
    return prop(action.type,
        {
            [ProjectActions.SEARCH]: {
                ...state,
                project: action.payload,
            },
            [BlogActions.SEARCH]: {
                ...state,
                blog: action.payload,
            },
            [GalleryActions.SEARCH]: {
                ...state,
                gallery: action.payload,
            },
        }) || state;
}
