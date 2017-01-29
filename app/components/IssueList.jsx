import React, { PropTypes } from 'react';

import List from 'molecules/List';
import Card from 'molecules/Card';

export default function IssueList({
  issues,
  getIssues,
  isFetching,
}) {
  return (
    <List
      retrieve={getIssues}
      isFetching={isFetching}
      data={issues}
    >
      {issue => (
        <Card
          title={issue.title}
          key={issue.id}
        >
          <div>{issue.title}</div>
        </Card>
      )}
    </List>
  );
}

IssueList.propTypes = {
  issues: PropTypes.array,
  isFetching: PropTypes.bool,
  getIssues: PropTypes.func.isRequired,
};
