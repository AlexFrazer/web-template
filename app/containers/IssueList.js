import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getIssues } from '../actions/issues';
import IssueList from '../components/IssueList';

export default connect(state => ({
  isFetching: state.issues.isFetching,
  issues: Object.values(state.issues.data),
}), dispatch => ({
  getIssues: bindActionCreators(getIssues, dispatch),
}))(IssueList);
