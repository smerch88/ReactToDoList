import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Button } from './ToDoForm.styled';

export class ToDoForm extends Component {
  state = {
    task: '',
    status: 'done',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ task: '' });
  };

  render() {
    const { task } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          Task
          <label htmlFor={nanoid()}>
            <input
              type="text"
              name="task"
              value={task}
              required
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit">Add task</Button>
        </Form>
      </>
    );
  }
}

ToDoForm.propTypes = { addTask: PropTypes.func };
