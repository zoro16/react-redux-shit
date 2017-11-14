import { createStore, applyMiddlware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';


const loggerMiddleware = createLogger();


export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddlware(
            thunkMiddleware, // LET US DISPATCH ACTIONS
            loggerMiddleware // NEAT MIDDLEWARE THAT LOGS ACTIONS
        )
    );
}



