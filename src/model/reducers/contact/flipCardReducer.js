/**
 * Created by Zoho on 16/9/2.
 */
import { DEFAULT_STORE } from 'store/default';
import { ContactActions } from 'actions/types';

export function flipCardBackReducer(state = DEFAULT_STORE.searchKeyword, action) {
  switch (action.type) {
    case ContactActions.FLIP_CARD_BACK:
      return {
        faceUp: false,
        backComponentType: action.payload,
      };
    case ContactActions.FLIP_CARD_FRONT:
      return {
        ...state,
        faceUp: true,
      };
    default:
      return state;
  }
}

/** ****************** Helper functions ****************** */
// Temp usage
// function _getRelevantContent(theme) {
//     switch (theme) {
//         case 'archive':
//             return 'ResumeDetail';
//         case 'github':
//             return 'GitHubDetail';
//         case 'envelope':
//             return 'EmailDetail';
//         case 'linkedin':
//             return 'LinkedInDetail';
//         default:
//             return 'div';
//     }
// }
