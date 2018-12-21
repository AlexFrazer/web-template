import * as React from 'react';

interface State {
  readonly error: boolean;
}

export default class ErrorBoundary extends React.PureComponent<{}, State> {
  state = { error: false };

  componentDidCatch(e: Error) {
    console.trace(e);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <h1>Something Went Wrong.</h1>;
    }
    return this.props.children;
  }
}
