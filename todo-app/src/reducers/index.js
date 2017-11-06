import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilter
} from '../actions';

const initailState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
};

function todoApp(state = initailState, action) {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
        return {...state, visibilityFilter: action.fitler};
        
        case ADD_TODO:
        return {...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
               };

        case TOGGLE_TODO:
        return {...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return { ...state.todo, completed: !todo.completed};   
                    }
                })
               };

        default:
        return state;
}

