/**
 * Created by hao.zuo on 2017/10/20.
 */

import {DEFAULT_STORE} from '$store/default';
import {ProjectActions} from '$actions/types';

/******************** Helpers *******************/
const selectTag = compose(uniq, append)

/******************** Reducers *******************/
export function tagsFilterReducer(
  state = DEFAULT_STORE.tagFilter,
  action
) {
  return prop(action.type,
    {
      [ProjectActions.ADD_TAG_FILTER]: {
        ...state,
        project: selectTag(action.payload, state.project)
      },
      [ProjectActions.REMOVE_TAG_FILTER]: {
        ...state,
        project: without(action.payload, state.project)
      }
    }) || state;
}