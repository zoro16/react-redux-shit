import { REQUEST_POSTS,
         RECEIVE_POSTS,
         INVALIDATE_SUBREDDIT
       } from '../actions';


function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}. state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.post,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}



export default function postsBySubreddit(state = {}, action) {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
                // EQUIVALENT TO
                // let nextState = {}
                // nextState[action.subreddit] = posts(state[action.subreddit], action)
                // return Object.assign({}, state, nextState)

            });
        default:
            return state;
    }
}

