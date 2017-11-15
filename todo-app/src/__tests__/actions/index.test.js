import { addTodo, setVisibilityFilter, toggleTodo  }from '../../actions';


describe('actions', () => {
  it('should create an action to add a todo', () => {
      const text = 'Finish docs';
      let nextTodoId = 0;
      const expectedAction = {
          id: nextTodoId++,
          type: "ADD_TODO",
          text
      }
      expect(addTodo(text)).toEqual(expectedAction)
  }),
  it('should create an action to set visibility filter', () => {
      const filter = 'SHOW_COMPLETE';
      const expectedAction = {
          type: "SET_VISIBILITY_FILTER",
          filter
      }
      expect(setVisibilityFilter(filter)).toEqual(expectedAction)
  }),
  it('should create an action to toggle a todo from active to completed', () => {
      const id = 1;
      const expectedAction = {
          type: "TOGGLE_TODO",
          id
      }
      expect(toggleTodo(id)).toEqual(expectedAction)
  })
})
