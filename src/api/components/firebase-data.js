import React, { Component } from 'react';
import { string, func } from 'prop-types';

import IsLoadingWrapper from '../../components/is-loading-wrapper/is-loading-wrapper';
import { on, off } from '../firebase/database';

export default class FirebaseData extends Component {
  static propTypes = {
    dbRef: string.isRequired,
    children: func.isRequired,
  };

  state = { data: undefined, isFetched: false };

  componentDidMount() {
    on(this.props.dbRef, this.receiveData);
  }

  componentWillUnmount() {
    off(this.props.dbRef);
  }

  receiveData = data => this.setState({ data, isFetched: true });

  render() {
    const { dbRef, children } = this.props;
    const { data, isFetched } = this.state;

    if (isFetched && !data) {
      console.warn(dbRef, 'is fetched, but is falsy:', data);
    }

    return (
      <IsLoadingWrapper isLoading={!isFetched} large>
        { () => children(data) }
      </IsLoadingWrapper>
    );
  }
}
