export enum TodoActionType {
  Add, Remove
}

export interface TodoActionPayload {
  todoText?: string;
  removeIndex?: number
}

export interface TodoAction {
  type: TodoActionType;
  payload: TodoActionPayload;
}

export function addTodo(text: string): TodoAction {
  return {
    type: TodoActionType.Add,
    payload: {
      todoText: text
    }
  }
}

export function removeTodo(index: number): TodoAction {
  return {
    type: TodoActionType.Remove,
    payload: {
      removeIndex: index
    }
  }
}
