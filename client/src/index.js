import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from  'redux'

import App from './App';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducers, composeEnhancers(applyMiddleware()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

