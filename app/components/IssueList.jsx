import React from 'react';

import List from 'molecules/List';

type Props = {
  getIssues: () => Promise<Issue[]>,
  issues: {
    data: Issue[],
    isFetching: boolean,
  },
};

export default function IssueList(props: Props) {
  const { getIssues, issues: { isFetching, data } } = props;
  return (
    <List
      retrieve={getIssues}
      isFetching={isFetching}
      data={Array.from(data.values())}
    >
      {issue => (<div key={issue.id}>
        {issue.title}
      </div>)}
    </List>
  );
}
