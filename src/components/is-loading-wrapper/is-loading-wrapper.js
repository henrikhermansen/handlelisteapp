import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/spinner';

const IsLoadingWrapper = ({
  isLoading,
  large,
  inline,
  children,
}) => (
  isLoading
    ? (
      <Spinner {...large} {...inline} />
    )
    : children
);

IsLoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  large: PropTypes.bool,
  inline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

IsLoadingWrapper.defaultProps = {
  large: false,
  inline: false,
};

export default IsLoadingWrapper;
