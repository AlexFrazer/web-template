import React, { Component } from 'react';

import Button from 'app/components/interface/Button';
import styles from 'app/styles/views/counter.scss';

const MIN = 0;
const MAX = 10;

export default class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => this.setState(({ count }) => ({
    count: Math.min(count + 1, MAX),
  }));

  onDecrement = () => this.setState(({ count }) => ({
    count: Math.max(count - 1, MIN),
  }));

  render() {
    const { count } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.count}>
          {this.state.count}
        </div>
        <div className={styles.controls}>
          <Button
            label="Add"
            disabled={count + 1 > MAX}
            onClick={this.onIncrement}
          />
          <Button
            label="Subtract"
            disabled={count - 1 < MIN}
            onClick={this.onDecrement}
          />
        </div>
      </div>
    );
  }
}
