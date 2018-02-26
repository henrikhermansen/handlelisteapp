import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

class AddBagItem extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    addBagItem: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
  };

  render() {
    return (
      <IsLoadingWrapper isLoading={this.props.isLoading || this.state.isLoading}>
        <div>{ this.props.items }</div>
        <button onClick={this.props.addBagItem}>Dummy</button>
      </IsLoadingWrapper>
    );
  }
}

export default AddBagItem;
