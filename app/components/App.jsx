import React, { Component, PropTypes } from 'react';

import styles from 'app/styles/app.scss';
import Navbar from 'app/containers/Navbar';
import Sidebar from 'app/containers/Sidebar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
  };

  state = { disabled: false };

  toggleButton = open => this.setState({ disabled: !open });

  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        <Sidebar
          width={288}
          onChange={this.toggleButton}
        />
        <div className={styles.header}><Navbar /></div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer} />
      </div>
    );
  }
}
