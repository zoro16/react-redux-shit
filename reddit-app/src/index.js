import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';


const loggerMiddleware = createLogger();

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // LET US DISPATCH ACTIONS
        loggerMiddleware // NEAT MIDDLEWARE THAT LOGS ACTIONS
    )
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);



