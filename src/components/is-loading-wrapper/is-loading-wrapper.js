import React from 'react';
import { bool, func, node, oneOfType } from 'prop-types';

import Spinner from '../spinner/spinner';

const IsLoadingWrapper = ({
  isLoading,
  large,
  inline,
  children,
}) => {
  if (isLoading) {
    return <Spinner {...large} {...inline} />;
  } if (typeof children === 'function') {
    return children();
  }
  return children;
};

IsLoadingWrapper.propTypes = {
  isLoading: bool.isRequired,
  large: bool,
  inline: bool,
  children: oneOfType([func, node]).isRequired,
};

IsLoadingWrapper.defaultProps = {
  large: false,
  inline: false,
};

export default IsLoadingWrapper;
