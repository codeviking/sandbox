import React, { Component } from 'react';
import { Provider } from 'react-redux'

import todoStore from './TodoStore';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <Provider store={todoStore}>
        <AddTodoForm />
        <TodoList />
      </Provider>
    );
  }
}

export default App;
