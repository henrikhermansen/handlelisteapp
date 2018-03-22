import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/app';
import ErrorBoundary from './components/error-boundary/error-boundary';

const renderApp = Component => render(
  <BrowserRouter>
    <AppContainer>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </AppContainer>
  </BrowserRouter>
  , document.querySelector('#app'),
);

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}
