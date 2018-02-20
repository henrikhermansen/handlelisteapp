import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './spinner.less';

const Spinner = ({ large, inline }) => {
  const classNames = classnames(
    'spinner',
    {
      'spinner--large': large,
      'spinner--inline': inline,
    },
  );

  return (
    <div className={classNames}>
      Loading...
    </div>
  );
};

Spinner.propTypes = {
  large: PropTypes.bool,
  inline: PropTypes.bool,
};

Spinner.defaultProps = {
  large: false,
  inline: false,
};

export default Spinner;
