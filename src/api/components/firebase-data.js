import React, { Component } from 'react';
import { string, func } from 'prop-types';

import IsLoadingWrapper from '../../components/is-loading-wrapper/is-loading-wrapper';
import { on, off } from '../firebase/database';

export default class FirebaseData extends Component {
  static propTypes = {
    ref: string.isRequired,
    children: func.isRequired,
  };

  state = { data: undefined };

  componentDidMount() {
    on(this.props.ref, this.receiveData);
  }

  componentWillUnmount() {
    off(this.props.ref);
  }

  receiveData = data => this.setState({ data });

  render() {
    const { children } = this.props;
    const { data } = this.state;

    return (
      <IsLoadingWrapper isLoading={!data} large>
        { children(data) }
      </IsLoadingWrapper>
    );
  }
}
