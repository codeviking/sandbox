export enum TodoActionType {
  Add, Remove
}

export interface TodoAction {
  type: TodoActionType
}

export interface AddTodoAction {
  type: TodoActionType.Add;
  text: string;
}

export interface RemoveTodoAction {
  type: TodoActionType.Remove;
  index: number;
}

export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoActionType.Add,
    text
  }
}

export function removeTodo(index: number): RemoveTodoAction {
  return {
    type: TodoActionType.Remove,
    index
  }
}
