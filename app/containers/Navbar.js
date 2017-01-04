import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../components/Navbar';
import { toggle } from '../actions/sidebar';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
