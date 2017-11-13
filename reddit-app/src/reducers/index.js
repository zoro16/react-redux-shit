import { combineReducers } from 'redux';
import selectSubreddit from './selectSubreddit';
import postsBySubreddit from './postsBySubreddit';


const rootReducer = combineReducers(
    selectSubreddit,
    postsBySubreddit
);


export default rootReducer;
