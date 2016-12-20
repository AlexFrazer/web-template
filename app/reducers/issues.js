import {
  REQUEST_ISSUES,
  RECEIVE_ISSUES,
} from 'app/actions/issues';

export const INITIAL_STATE = {
  data: new Map(),
  isFetching: false,
};

export default function issues(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return { ...state, isFetching: true };
    case RECEIVE_ISSUES:
      return {
        ...state,
        data: action.payload.reduce((total, issue) => {
          total.set(issue.id, issue);
          return total;
        }, new Map()),
      };
    default:
      return state;
  }
}
