import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';

import './app.less';

const DefaultRoute = () => <div>This is the default route</div>;
const SomeOtherRoute = () => (
  <div>
    Some other route comes here
    <Route path="/other/node" component={() => <span>a hidden route!</span>} />
  </div>
);
const NotFound = () => <div>This route does not exist</div>;

const App = () => (
  <div>
    <header>This is the app</header>
    <Navigation />
    <main>
      <Switch>
        <Route path="/" exact component={DefaultRoute} />
        <Route path="/other" component={SomeOtherRoute} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
