import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './navigation-item.less';

const NavigationItem = props => (
  <NavLink
    className="navigation-item semi-bold"
    activeClassName="navigation-item--active"
    {...props}
  />
);

NavigationItem.defaultProps = {
  to: '/',
};

NavigationItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
