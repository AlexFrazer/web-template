import React, { PropTypes } from 'react';

import List from 'molecules/List';

export default function IssueList({
  getIssues,
  issues: { data, isFetching },
}) {
  return (
    <List
      retrieve={getIssues}
      isFetching={isFetching}
      data={Object.values(data)}
    >
      {issue => (<div>
        {issue.title}
      </div>)}
    </List>
  );
}

IssueList.propTypes = {
  issues: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  getIssues: PropTypes.func.isRequired,
};
