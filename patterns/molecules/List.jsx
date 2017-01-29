import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any.isRequired,
    })).isRequired,
    retrieve: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  componentDidMount() {
    this.props.retrieve();
  }

  render() {
    const { data, isFetching, children, className } = this.props;

    return (
      <div className={className}>
        {isFetching && <div />}
        {data.map(children)}
      </div>
    );
  }
}
