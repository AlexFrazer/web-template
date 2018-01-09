import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {}
export interface State {
  count: number;
}

export default class Counter extends React.PureComponent<Props, State> {
  state = {
    count: 0,
  };

  count = (increment: number) => () =>
    this.setState(state => ({
      ...state,
      count: state.count + increment,
    }));

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          {this.state.count}
          <div>
            <button onClick={this.count(-1)}>-</button>
            <button onClick={this.count(1)}>+</button>
          </div>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}
