import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/" exact activeClassName="active">Root</NavLink>
    <NavLink to="/other" exact activeClassName="active">Other</NavLink>
  </nav>
);

const DefaultRoute = () => <span>This is the default route</span>;
const SomeOtherRoute = () => <span>Some other route comes here</span>;

const App = () => (
  <div>
    <header>This is the app</header>
    <Nav />
    <main>
      <Switch>
        <Route path="/" exact component={DefaultRoute} />
        <Route path="/other" component={SomeOtherRoute} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export default App;
