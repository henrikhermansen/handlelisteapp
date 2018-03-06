import React, { Component } from 'react';
import classnames from 'classnames';

import NavigationItem from './navigation-item';
import NavigationToggle from '../navigation-toggle/navigation-toggle';
import * as paths from '../../constants/paths';

import './navigation.less';

class Navigation extends Component {
  state = { visible: false };

  toggleVisible = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div className="fixed-bottom">
        <div className="navigation-wrapper">
          <NavigationToggle
            visible={visible}
            toggle={this.toggleVisible}
          />
          <nav
            className={classnames(
              'navigation',
              { 'navigation--visible': visible },
            )}
          >
            <NavigationItem to={paths.shopping} exact>Handleliste</NavigationItem>
            <NavigationItem to={paths.items}>Vareutvalg</NavigationItem>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
