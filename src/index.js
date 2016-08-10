import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Reducers/Reducer.js';
import App from './Components/Presentational/App';
import './index.css';

let store = createStore(Reducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
