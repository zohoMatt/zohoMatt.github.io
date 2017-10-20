/**
 * Created by Zoho on 16/9/15.
 */
import {DEFAULT_STORE} from '$store/default'

// Search keyword. Including all major sub-pages.
export function searchKeywordReducer(
    state = DEFAULT_STORE.searchKeyword, action
) {
  return prop(action.type,
    {
      'SEARCH_PROJECT': {
        ...state,
        project: action.payload,
      },
      'SEARCH_BLOG': {
        ...state,
        blog: action.payload,
      },
      'SEARCH_GALLERY': {
        ...state,
        gallery: action.payload,
      }
    }) || state
}
