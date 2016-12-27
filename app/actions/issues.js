import { request } from 'app/utils/api';

export const ISSUE_ERROR = 'issues/ERROR';
export const REQUEST_ISSUES = 'issues/REQUEST';
export const RECEIVE_ISSUES = 'issues/RECEIVE';

export function getIssues() {
  return async dispatch => {
    dispatch({ type: REQUEST_ISSUES });

    const issues = await request('/repos/rails/rails/issues');

    dispatch({
      type: RECEIVE_ISSUES,
      payload: issues,
    });

    return issues;
  };
}
