import React, { Component, PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

import styles from 'app/styles/app.scss';
import Navbar from 'app/containers/Navbar';
import Sidebar from 'app/containers/Sidebar';

export default class App extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  };

  state = { disabled: false };

  toggleButton = open => this.setState({ disabled: !open });

  render() {
    const { isOpen, children } = this.props;

    return (
      <div className={styles.container}>
        <Sidebar
          width={288}
          onChange={this.toggleButton}
        />
        <VelocityComponent
          duration={200}
          animation={{ translateX: isOpen ? 288 : 0 }}
        >
          <div className={styles.wrapper}>
            <div className={styles.header}><Navbar /></div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer} />
          </div>
        </VelocityComponent>
      </div>
    );
  }
}
