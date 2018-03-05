import React, { PureComponent } from 'react';
import classnames from 'classnames';

import NavigationItem from './navigation-item';
import * as paths from '../../constants/paths';
import KeyCodes from '../../constants/key-codes';

import './navigation.less';

class Navigation extends PureComponent {
  state = { visible: false };

  onKeyDown = (event) => {
    if (event.which === KeyCodes.ENTER) {
      this.toggleVisible();
    }
  };

  toggleVisible = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div className="fixed-bottom">
        <div className="navigation-wrapper">
          <div
            className={classnames(
              'navigation-toggle',
              { 'navigation-toggle--active': visible },
            )}
            onClick={this.toggleVisible}
            onKeyDown={this.onKeyDown}
            role="button"
            aria-pressed={String(visible)}
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
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
