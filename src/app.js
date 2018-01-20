import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import NotFound from './components/not-found/not-found';
import ShoppingList from './components/shopping-list';
import * as paths from './constants/paths';

import './app.less';

const App = () => (
  <div>
    <header>This is the app</header>
    <Navigation />
    <main>
      <Switch>
        <Route path={paths.root} exact component={() => <div />} />
        <Route path={paths.shoppingList} component={ShoppingList} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
