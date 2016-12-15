import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from 'app/components/Navbar';
import { toggle } from 'app/actions/sidebar';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);