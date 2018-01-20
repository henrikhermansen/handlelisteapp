import React from 'react';

import NavigationItem from './navigation-item';
import * as paths from '../../constants/paths';

const Navigation = () => (
  <nav>
    <ul>
      <NavigationItem exact>Root</NavigationItem>
      <NavigationItem to={paths.shoppingList} exact>Handleliste</NavigationItem>
    </ul>
  </nav>
);

export default Navigation;
