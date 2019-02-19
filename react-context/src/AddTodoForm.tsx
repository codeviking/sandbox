import * as React from 'react';

import { TodoContext } from './WithTodos';

interface State {
  curText?: string
}

export default class AddQuestionForm extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { curText: undefined };
  }
  render() {
    return (
      <TodoContext.Consumer>
        {({ addTodo }) => (
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.state.curText !== undefined) {
              addTodo(this.state.curText);
            } else {
              alert('Enter some text!');
            }
          }}>
            <input
                type="text"
                defaultValue={this.state.curText}
                onChange={e => this.setState({ curText: e.target.value })} />
            {' '}<button type="submit">Add</button>
          </form>
        )}
      </TodoContext.Consumer>
    );
  }
}
