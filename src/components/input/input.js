import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.less';

class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    focusOnMount: PropTypes.bool,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    type: 'text',
    focusOnMount: false,
    onFocus: () => {},
  };

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.input.focus();
    }
  }

  render() {
    const {
      className, focusOnMount, onFocus, ...props
    } = this.props;
    return (
      <input
        className={classnames(
          'input',
          className,
        )}
        ref={(input) => { if (focusOnMount) { this.input = input; } }}
        onFocus={(e) => {
          const val = e.target.value;
          e.target.value = '';
          e.target.value = val;
          onFocus(e);
        }}
        {...props}
      />
    );
  }
}

export default Input;
