import { REQUEST_POSTS,
         RECEIVE_POSTS,
         INVALIDATE_REDDIT
       } from '../actions';


const posts = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) => {
    switch(action.type) {
        case INVALIDATE_REDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
};



const postsByReddit = (state = {}, action) => {
    switch(action.type) {
        case INVALIDATE_REDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action)
                // EQUIVALENT TO
                // let nextState = {}
                // nextState[action.subreddit] = posts(state[action.subreddit], action)
                // return Object.assign({}, state, nextState)

            };
        default:
            return state;
    }
};

export default postsByReddit;

