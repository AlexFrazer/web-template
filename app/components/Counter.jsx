import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => this.setState(state => ({
    ...state,
    count: state.count + 1,
  }));

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onIncrement}>Up</button>
      </div>
    );
  }
}
