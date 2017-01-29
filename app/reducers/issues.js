import keyBy from 'lodash/keyBy';
import {
  REQUEST_ISSUES,
  RECEIVE_ISSUES,
} from '../actions/issues';

export const INITIAL_STATE = {
  data: {},
  isFetching: false,
};

export default function issues(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_ISSUES:
      return { ...state, isFetching: true };
    case RECEIVE_ISSUES:
      return {
        ...state,
        isFetching: false,
        data: keyBy(payload, item => item.id),
      };
    default:
      return state;
  }
}
