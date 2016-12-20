import Issues from 'app/schemas/issues';

export const ISSUE_ERROR = 'issues/ERROR';
export const REQUEST_ISSUES = 'issues/REQUEST';
export const RECEIVE_ISSUES = 'issues/RECEIVE';

export function getIssues() {
  return async dispatch => {
    console.log(Issues);
    Issues.allIssues();
    await new Promise(resolve => {
      setTimeout(resolve, 100);
    });
    dispatch({ type: RECEIVE_ISSUES });
  };
}
