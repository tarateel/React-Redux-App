import React from "react";
import ReactDOM from "react-dom";
import './styles/index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// dependencies imported

const store = createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);