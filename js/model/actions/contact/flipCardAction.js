/**
 * Created by Zoho on 16/9/2.
 */

export function flipBackAction(type) {
  // console.log('faceUp in dispatcher', faceUp);
  return {
    type: 'FLIP_CARD_BACK',
    payload: type,
  };
}

export function flipFrontAction() {
  return {
    type: 'FLIP_CARD_FRONT',
    payload: null,
  };
}
