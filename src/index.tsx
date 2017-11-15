import * as React from 'react';
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todoApp from './reducers/reducer';

let store = createStore(todoApp);

let rootElement = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);