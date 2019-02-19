import * as React from 'react';
import { render } from 'react-dom';

interface State {
  todos: string[],
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
}

interface Props {
  children: React.ReactNode
}

export const TodoContext = React.createContext<State>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: () => {}
});

export class WithTodos extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
      addTodo: (text) => (
        this.setState({ todos: this.state.todos.concat([ text ]) })
      ),
      removeTodo: (index) => (
        this.setState({
          todos: this.state.todos.slice(0, index).concat(
            this.state.todos.slice(index + 1)
          )
        })
      )
    }
  }
  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
