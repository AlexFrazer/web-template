import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from 'app/components/App';

const mapStateToProps = state => ({
  isOpen: state.sidebar.isOpen,
});

export default connect(mapStateToProps)(App);