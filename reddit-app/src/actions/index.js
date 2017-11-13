export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";


export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
};

// PRESS 'REFRESH' BUTTON TO UPDATE
export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    };
};

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    };
};

export function receivePosts(subreddit) {
    return {
        type: RECEIVE_POSTS,
        subreddit
    };
};
