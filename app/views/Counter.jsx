import React, { Component } from 'react';

import styles from 'app/styles/views/counter.scss';

export default class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => this.setState(({ count }) => ({
    count: count + 1,
  }));

  onDecrement = () => this.setState(({ count }) => ({
    count: count - 1,
  }));

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.count}>
          {this.state.count}
        </div>
        <div className={styles.controls}>
          <button className={styles.action} onClick={this.onIncrement}>Up</button>
          <button className={styles.action} onClick={this.onDecrement}>Down</button>
        </div>
      </div>
    );
  }
}
