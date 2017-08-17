import * as React from 'react';
import * as styles from 'app/styles/counter/counter.scss';

interface Props {
  title?: string;
  initial?: number;
}

interface State {
  count: number;
}

export default class Counter extends React.Component<Props, State> {
  state = { count: this.props.initial };

  static defaultProps = {
    title: 'Counter',
    initial: 0,
  };

  updateCount = (update: number) => () =>
    this.setState(state => ({
      ...state,
      count: Math.max(state.count + update, 0),
    }));

  render() {
    const { count } = this.state;
    const { title } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {title}
        </div>
        <div className={styles.content}>
          {count}
        </div>
        <div className={styles.footer}>
          <button onClick={this.updateCount(1)}>+</button>
          <button disabled={count === 0} onClick={this.updateCount(-1)}>
            -
          </button>
        </div>
      </div>
    );
  }
}
