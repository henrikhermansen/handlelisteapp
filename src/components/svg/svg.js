import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './svg.less';

const Svg = ({ fill, ...props }) => (
  <span
    {...props}
    className={classnames(
      'svg',
      fill && `svg--${fill}`,
    )}
  />
);

Svg.propTypes = {
  fill: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Svg.defaultProps = {
  fill: undefined,
};

export default Svg;
