/**
 * Created by Zoho on 16/9/2.
 */
import {ContactActions} from '$actions/types';

export function flipBackAction(type) {
  return {
    type: ContactActions.FLIP_CARD_BACK,
    payload: type,
  };
}

export function flipFrontAction() {
  return {
    type: ContactActions.FLIP_CARD_FRONT,
    payload: null,
  };
}
