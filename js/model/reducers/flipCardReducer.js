/**
 * Created by Zoho on 16/9/2.
 */
/**
 * Handling the flip card actions:
 * FLIP_CARD
 */
export default function (
    state = true,
    action
) {
    switch (action.type) {
        case 'FLIP_CARD':
            console.log(state);
            return !state;
        default:
            return state;
    }
}