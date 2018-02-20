import React from 'react';

import NavigationItem from './navigation-item';
import * as paths from '../../constants/paths';

import './navigation.less';

const Navigation = () => (
  <nav className="navigation">
    <NavigationItem exact>Root</NavigationItem>
    <NavigationItem to={paths.shoppingList} exact>Handleliste</NavigationItem>
  </nav>
);

export default Navigation;
