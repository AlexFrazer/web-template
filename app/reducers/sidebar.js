import { OPEN, CLOSE } from 'app/actions/sidebar';

export const INITIAL_STATE = { isOpen: false };

export default function sidebar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN:
      return { ...state, isOpen: true };
    case CLOSE:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}