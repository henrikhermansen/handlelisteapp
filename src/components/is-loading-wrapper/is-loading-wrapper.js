import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/spinner';

const IsLoadingWrapper = ({ isLoading, children }) => (
  isLoading
    ? (
      <Spinner large />
    )
    : children
);

IsLoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default IsLoadingWrapper;
