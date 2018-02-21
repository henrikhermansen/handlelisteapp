import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './shopping-item.less';

class ShoppingItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  state = {
    deleteQuery: false,
  };

  deleteQuery = () => {
    this.setState({ deleteQuery: !this.state.deleteQuery });
  };

  render() {
    const { item } = this.props;
    const { deleteQuery } = this.state;
    return (
      <div className="shopping-item">
        <span className={classnames({ expanded: !deleteQuery })}>
          {item.name}
        </span>
        <span className={classnames({ expanded: deleteQuery })}>
          {
            deleteQuery
              ? (
                <span>Er du sikker på at du vil slette?</span>
              )
              : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              )
          }
        </span>
        <span onClick={this.deleteQuery} onKeyPress={this.deleteQuery} role="button" tabIndex="0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </span>
      </div>
    );
  }
}

export default ShoppingItem;
