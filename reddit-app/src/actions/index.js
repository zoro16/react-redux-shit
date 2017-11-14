export const SELECT_REDDIT = "SELECT_REDDIT";
export const INVALIDATE_REDDIT = "INVALIDATE_REDDIT";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";


export const selectReddit = (reddit) => {
    return {
        type: SELECT_REDDIT,
        reddit
    };
};

// PRESS 'REFRESH' BUTTON TO UPDATE
export const invalidateReddit = (reddit) => {
    return {
        type: INVALIDATE_REDDIT,
        reddit
    };
};

export const requestPosts = (reddit) => {
    return {
        type: REQUEST_POSTS,
        reddit
    };
};

export const receivePosts = (reddit, json) => {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
};

export const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit));
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => {
              console.log(json)
              dispatch(receivePosts(reddit, json))
        }
             );
};


const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit];

    if(!posts)
        return true;
    else if (posts.isFetching)
        return false
    else
        return posts.didInvalidate;
};

export const fetchPostsIfNeeded = (reddit) => {
    return function(dispatch, getState) {
        if(shouldFetchPosts(getState(), reddit)){
            // DISPATCH A THUNK FROM THUNK
            return dispatch(fetchPosts(reddit));
        } else {
            // LET THE CALLING CODE TO KNOW THAT THERE IS NOTHING TO WAIT FOR
            return Promise.resolve();
        }
    };
};
