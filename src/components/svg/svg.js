import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './svg.less';

const Svg = ({ fill, className, ...props }) => (
  <span
    {...props}
    className={classnames(
      'svg',
      fill && `svg--${fill}`,
      className,
    )}
  />
);

Svg.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Svg.defaultProps = {
  fill: undefined,
  className: undefined,
};

export default Svg;
