import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const todoApp = combineReducers({
    visibilityFilter,
    todos
});

// The Above Is Equal To
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

export default todoApp;

