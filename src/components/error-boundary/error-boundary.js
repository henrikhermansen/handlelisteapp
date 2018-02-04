import React, { Component } from 'react';
import { node } from 'prop-types';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  state = { hasError: false };

  componentDidCatch(error, info) {
    console.error(error, info);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error, se consolet.</div>;
    }

    return this.props.children;
  }
}
