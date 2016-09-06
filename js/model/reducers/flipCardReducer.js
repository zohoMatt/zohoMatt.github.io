/**
 * Created by Zoho on 16/9/2.
 */
/**
 * Handling the flip card actions:
 * @action
 * FLIP_CARD
 * FLIP_CARD_FRONT
 *
 * @state
 * [store.flipCard]
 * {
 *  faceUp: <boolean>,
 *  backComponent: <string>
 * }
 */
export default function flipCardBackReducer (
    state = {
        faceUp: true,
        backComponent: 'div'
    },
    action
) {
    // todo
    switch (action.type) {
        case 'FLIP_CARD_BACK':
            return {
                faceUp: false,
                backComponent: action.payload
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
