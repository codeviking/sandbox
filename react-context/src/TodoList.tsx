import * as React from 'react';

import { TodoContext } from './WithTodos';

export default class QuestionInputList extends React.PureComponent {
  render() {
    return (
      <TodoContext.Consumer>
        {({ todos, removeTodo }) => (
          <React.Fragment>
            {todos.map((text, idx) => (
              <div key={`${text}.${idx}`}>
                {text}
                {' '}<button onClick={() => removeTodo(idx)}>Remove</button>
              </div>
            ))}
          </React.Fragment>
        )}
      </TodoContext.Consumer>
    )
  }
}
