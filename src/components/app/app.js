import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import NotFound from '../not-found/not-found';
import ShoppingList from '../shopping-list/index';
import * as paths from '../../constants/paths';

import './app.less';

class App extends Component {
  static propTypes = {
    initialization: PropTypes.shape({
      isInitialized: PropTypes.bool.isRequired,
      isInitializing: PropTypes.bool.isRequired,
    }).isRequired,
    initializeRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.initialization.isInitialized) {
      this.props.initializeRequest();
    }
  }

  render() {
    const { initialization } = this.props;
    return (
      <div>
        <header>This is the app</header>
        <Navigation />
        <main>
          {
            initialization.isInitializing
              ? (
                <span>Loading...</span>
              )
              : (
                <Switch>
                  <Route path={paths.root} exact component={() => <div />} />
                  <Route path={paths.shoppingList} component={ShoppingList} />
                  <Route component={NotFound} />
                </Switch>
              )
          }
        </main>
      </div>
    );
  }
}

export default App;
