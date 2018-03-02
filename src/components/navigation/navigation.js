import React from 'react';

import NavigationItem from './navigation-item';
import * as paths from '../../constants/paths';

import './navigation.less';

const Navigation = () => (
  <div className="fixed-bottom">
    <nav className="navigation">
      <NavigationItem to={paths.shopping} exact>Handleliste</NavigationItem>
    </nav>
  </div>
);

export default Navigation;
