import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import createStore from './store-setup';

const renderApp = Component => render(
  <BrowserRouter>
    <Provider store={createStore()}>
      <AppContainer>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </AppContainer>
    </Provider>
  </BrowserRouter>
  , document.querySelector('#app'),
);

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App);
  });
}
