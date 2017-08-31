/**
 * Created by Zoho on 16/9/15.
 */
import {DEFAULT_STORE} from './rootReducer'

require('JS/RamdaGlobally')()

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

// Tag filter for all pages
export function tagsFilterReducer(
  state = DEFAULT_STORE.tagFilter,
  action
) {
  return prop(action.type,
    {
      'ADD_PROJECT_FILTER_TAGS': {
        ...state,
        project: selectTag(action.payload, state.project)
      },
      'REMOVE_PROJECT_FILTER_TAGS': {
        ...state,
        project: without(action.payload, state.project)
      }
    }) || state;

}

/******************** Helpers *******************/
const selectTag = compose(uniq, append)