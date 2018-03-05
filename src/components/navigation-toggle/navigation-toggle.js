import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './navigation-toggle.less';
import KeyCodes from '../../constants/key-codes';

const NavigationToggle = ({ visible, toggle }) => {
  const onKeyDown = (event) => {
    if (event.which === KeyCodes.ENTER) {
      toggle();
    }
  };

  return (
    <div
      className={classnames(
          'navigation-toggle',
          { 'navigation-toggle--active': visible },
        )}
      onClick={toggle}
      onKeyDown={onKeyDown}
      role="button"
      aria-pressed={String(visible)}
      tabIndex="0"
    >
      <span />
      <span />
      <span />
    </div>
  );
};

NavigationToggle.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default NavigationToggle;
