import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error caught is:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error! Error! Wnna try again?</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;