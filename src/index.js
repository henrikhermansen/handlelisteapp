import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/app';
import createStore from './store-setup';

const renderApp = Component => render(
  <BrowserRouter>
    <Provider store={createStore()}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
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
