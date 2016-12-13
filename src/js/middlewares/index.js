import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import multiMiddleware from 'redux-multi';
import hashHistory from 'react-router/lib/hashHistory';
import {routerMiddleware} from 'react-router-redux';

export default (env = process.env.NODE_ENV) => {
    const middlewares = [
        multiMiddleware,
        thunkMiddleware,
        routerMiddleware(hashHistory)
    ];

    if (env !== 'production' && env !== 'test') {
        // neat middleware that logs actions
        middlewares.push(createLogger({ collapsed: true }));
    }

    return middlewares;
};
