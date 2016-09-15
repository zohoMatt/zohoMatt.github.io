/**
 * Created by Zoho on 16/9/2.
 */
import { DEFAULT_STORE } from './rootReducer';

/**
 * @actions:
 * FLIP_CARD
 * FLIP_CARD_FRONT
 */
export function flipCardBackReducer (state=DEFAULT_STORE.searchKeyword, action) {
    switch (action.type) {
        case 'FLIP_CARD_BACK':
            return {
                faceUp: false,
                backComponentType: action.payload
            };
        case 'FLIP_CARD_FRONT':
            return {
                ...state,
                faceUp: true
            };
        default:
            return state;
    }
}

/******************** Helper functions *******************/
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
