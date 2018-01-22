import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import AppProvider from './app-provider';
import createStore from './store-setup';

const renderApp = Component => render(
  <BrowserRouter>
    <AppProvider store={createStore()}>
      <AppContainer>
        <Component />
      </AppContainer>
    </AppProvider>
  </BrowserRouter>
  , document.querySelector('#main'),
);

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App);
  });
}
