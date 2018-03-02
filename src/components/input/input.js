import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.less';

const Input = ({ className, ...props }) => (
  <input
    className={classnames(
      'input',
      className,
    )}
    {...props}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  type: 'text',
};

export default Input;
