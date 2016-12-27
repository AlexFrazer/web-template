import React, { Component, PropTypes } from 'react';

import styles from 'molecules/list.scss';

export default class List extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    retrieve: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.retrieve();
  }

  render() {
    const { data, isFetching, children } = this.props;
    console.log(data);

    return (
      <div className={styles.list}>
        {isFetching && <div className={styles.loading} />}
        {data.map(children)}
      </div>
    );
  }
}
