import { createStore } from 'redux';

import { TodoActionType, TodoAction } from './TodoActions';

export interface TodoState {
  todos: string[];
}

function handleAction(state: TodoState = { todos: [] }, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionType.Add:
      if (action.payload.todoText) {
        return {
          ...state,
          todos: state.todos.concat([ action.payload.todoText ])
        };
      } else {
        return state;
      }
    case TodoActionType.Remove:
      if (action.payload.removeIndex !== undefined) {
        return {
          ...state,
          todos: state.todos.slice(0, action.payload.removeIndex).concat(
            state.todos.slice(action.payload.removeIndex + 1)
          )
        }
      }
    default:
      return state;
  }
}

export default createStore(handleAction);

