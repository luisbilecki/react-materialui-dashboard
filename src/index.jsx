import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

// Configure redux store
const store = configureStore();

// Setup provider
const main = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
