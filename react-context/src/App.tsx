import React, { Component } from 'react';

import { WithTodos } from './WithTodos'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

class App extends React.PureComponent {
  render() {
    return (
      <WithTodos>
        <AddTodoForm />
        <TodoList />
      </WithTodos>
    );
  }
}

export default App;
