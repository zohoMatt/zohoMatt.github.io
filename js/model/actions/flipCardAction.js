/**
 * Created by Zoho on 16/9/2.
 */

export function dispatchFlipCard(faceUp) {
    console.log('faceUp in dispatcher', faceUp);
    return {
        type: 'FLIP_CARD',
        payload: faceUp
    }
}