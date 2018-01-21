import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './app';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const renderApp = Component => render(
  <BrowserRouter>
    <Provider store={store}>
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
  module.hot.accept('./app', () => {
    render(App);
  });
}
