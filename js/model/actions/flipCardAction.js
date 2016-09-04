/**
 * Created by Zoho on 16/9/2.
 */

export function dispatchFlipBack(type) {
    // console.log('faceUp in dispatcher', faceUp);
    return {
        type: 'FLIP_CARD_BACK',
        payload: type
    }
}

export function dispatchFlipFront() {
    return {
        type: 'FLIP_CARD_FRONT',
        payload: null
    }
}
