import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import NotFound from '../not-found/not-found';
import Shopping from '../shopping/shopping';
import * as paths from '../../constants/paths';

import './app.less';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

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
      <IsLoadingWrapper isLoading={initialization.isInitializing} large>
        <main>
          <div>
            <Switch>
              <Route path={paths.root} exact component={() => <div />} />
              <Route path={paths.shoppingList} component={Shopping} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
        <Navigation />
      </IsLoadingWrapper>
    );
  }
}

export default App;
