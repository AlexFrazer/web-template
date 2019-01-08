import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withNamespaces } from 'react-i18next';
import component, { Props } from './component';

export default compose<Props, {}>(
  connect(),
  withNamespaces('home'),
)(component);
