import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  static propTypes = {
    getIssues: PropTypes.func,
  };

  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    return (
      <div />
    );
  }
}
