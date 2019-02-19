import * as React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction, addTodo } from './TodoActions';

interface State {
  curText?: string
}

interface Props {
  addTodo: (text: string) => AddTodoAction
}

class AddQuestionForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { curText: undefined };
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (this.state.curText !== undefined) {
          this.props.addTodo(this.state.curText);
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
    );
  }
}

export default connect(undefined, { addTodo })(AddQuestionForm);
