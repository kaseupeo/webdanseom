import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
