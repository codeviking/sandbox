import * as React from 'react';
import { connect } from 'react-redux';
import { RemoveTodoAction, removeTodo } from './TodoActions';
import { TodoState } from './TodoStore';

interface Props {
  removeTodo: (index: number) => RemoveTodoAction;
  todos: string[];
}

class QuestionInputList extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map((text, idx) => (
          <div key={`${text}.${idx}`}>
            {text}
            {' '}<button onClick={() => this.props.removeTodo(idx)}>Remove</button>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state: TodoState) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { removeTodo })(QuestionInputList);
