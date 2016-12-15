import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sidebar from 'app/components/Sidebar';
import * as Actions from 'app/actions/sidebar';

export default connect(state => ({
  isOpen: state.sidebar.isOpen,
  isOpening: state.sidebar.isOpening,
}), dispatch => ({
  open: bindActionCreators(Actions.open, dispatch),
  close: bindActionCreators(Actions.close, dispatch),
  opened: bindActionCreators(Actions.opened, dispatch),
}))(Sidebar);