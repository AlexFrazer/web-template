import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getIssues } from '../actions/issues';
import IssueList from '../components/IssueList';

export default connect(state => ({
  issues: state.issues,
}), dispatch => ({
  getIssues: bindActionCreators(getIssues, dispatch),
}))(IssueList);
