import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({todos, onTodoClick}) => (
    <ul>
      
      {todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))} 
    </ul>
);

Todo.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shapes({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
