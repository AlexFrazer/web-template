import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any.isRequired,
    })).isRequired,
    retrieve: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.retrieve();
  }

  render() {
    const { data, isFetching, children } = this.props;

    return (
      <div>
        {isFetching && <div />}
        {data.map(children)}
      </div>
    );
  }
}
