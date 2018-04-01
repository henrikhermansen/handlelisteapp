/* eslint-disable import/first */
import './vendor';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/app';
import ErrorBoundary from './components/error-boundary/error-boundary';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
  , document.querySelector('#app'),
);
