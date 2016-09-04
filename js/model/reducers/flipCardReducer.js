/**
 * Created by Zoho on 16/9/2.
 */
/**
 * Handling the flip card actions:
 * FLIP_CARD
 */
export default function flipCardBackReducer (
    state = {
        faceUp: true,
        backContent: ''
    },
    action
) {
    // todo
    switch (action.type) {
        case 'FLIP_CARD_BACK':
            return {
                faceUp: false,
                backContent: getRelevantContent(action.payload)
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
function getRelevantContent(theme) {
    switch (theme) {
        case 'archive':
            return `I'm just a resume`;
        case 'github':
            return `I'm just a github page`;
        case 'mail':
            return `I'm just an email address`;
        case 'linkedin':
            return 'wanna linked in page? got it!';
        default:
            return 'nothing matches.';
    }
}
