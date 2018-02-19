import React from 'react';
import PropTypes from 'prop-types';

const IsLoadingWrapper = ({ isLoading, children }) => (
  isLoading
    ? (
      <span>Data is loading...</span>
    )
    : children
);

IsLoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default IsLoadingWrapper;
