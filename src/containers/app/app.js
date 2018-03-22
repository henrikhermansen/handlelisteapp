import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../../components/navigation/navigation';
import NotFound from '../../components/not-found/not-found';
import Shopping from '../../components/shopping/shopping';
import Assortment from '../assortment/index';
import * as paths from '../../constants/paths';

import './app.less';
import IsLoadingWrapper from '../../components/is-loading-wrapper/is-loading-wrapper';

const App = () => (
  <IsLoadingWrapper isLoading={false} large>
    <main>
      <div>
        <Switch>
          <Route
            path={paths.root}
            exact
            component={() => <Redirect to={paths.shopping} />}
          />
          <Route path={paths.shopping} component={Shopping} />
          <Route path={paths.items} component={Assortment} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
    <Navigation />
  </IsLoadingWrapper>
);

export default App;
