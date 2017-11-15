import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from './reducers';
import Root from './components/Root';

const loggerMiddleware = createLogger();
let store = createStore(
    todoApp,
    applyMiddleware(
        loggerMiddleware
    )
);

render(
    <Root store={store} />,
    document.getElementById('root')
);
