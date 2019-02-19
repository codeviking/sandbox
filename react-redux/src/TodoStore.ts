import { createStore } from 'redux';

import { AddTodoAction, RemoveTodoAction, TodoActionType, TodoAction } from './TodoActions';

export interface TodoState {
  todos: string[];
}

function handleAction(state: TodoState = { todos: [] }, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionType.Add:
      return {
        ...state,
        todos: state.todos.concat([ (action as AddTodoAction).text ])
      };
    case TodoActionType.Remove:
      const removeAction = (action as RemoveTodoAction);
      return {
        ...state,
        todos: state.todos.slice(0, removeAction.index).concat(
          state.todos.slice(removeAction.index + 1)
        )
      }
    default:
      return state;
  }
}

export default createStore(handleAction);

