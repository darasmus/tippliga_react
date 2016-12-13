// add browser fetch polyfill
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers';
import middlewares from './middlewares';

import Router from './router';


const store = createStore(
    rootReducer,
    // initial state
    {},
    applyMiddleware(...middlewares())
);

ReactDOM.render(
    <Provider store={store}>
        <Router store={store} />
    </Provider>,
    document.getElementById('app')
);
