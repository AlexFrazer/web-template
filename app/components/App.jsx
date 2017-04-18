import React, { Component } from 'react';

import styles from 'app/styles/app.scss';

export default class App extends Component {
  static propTypes = {
  };

  state = { disabled: false };

  toggleButton = open => this.setState({ disabled: !open });

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          Test
        </div>
      </div>
    );
  }
}
