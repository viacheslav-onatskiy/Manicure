import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import { GlobalStyle } from './components/common/styles';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <>
      <GlobalStyle whiteColor />
      <App tab="home" />
    </>
  </Provider>
);
