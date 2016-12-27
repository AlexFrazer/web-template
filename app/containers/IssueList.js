import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getIssues } from 'app/actions/issues';
import IssueList from 'app/components/IssueList';

export default connect(state => ({
  issues: state.issues,
}), dispatch => ({
  getIssues: bindActionCreators(getIssues, dispatch),
}))(IssueList);
