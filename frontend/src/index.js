import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
