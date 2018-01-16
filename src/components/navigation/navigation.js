import React from 'react';

import NavigationItem from './navigation-item';

const Navigation = () => (
  <nav>
    <ul>
      <NavigationItem exact>Root</NavigationItem>
      <NavigationItem to="/other" exact>Other</NavigationItem>
    </ul>
  </nav>
);

export default Navigation;
