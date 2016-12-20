import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from 'app/components/Home';
import { getIssues } from 'app/actions/issues';

export default connect(state => ({
  issues: state.issues,
}), dispatch => ({
  getIssues: bindActionCreators(getIssues, dispatch),
}))(Home);
