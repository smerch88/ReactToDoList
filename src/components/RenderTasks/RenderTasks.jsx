import { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonsList, TasksList } from './RenderTasks.styled';

export class RenderTasks extends Component {
  state = {
    filter: 'all',
  };

  filterTasks = e => {
    const filterState = e.target.dataset.state;
    console.log(filterState);
    this.setState({ filter: filterState });
  };

  render() {
    const { tasks, deleteTask, onToggleCompleted, showUpdateForm } = this.props;
    return (
      <>
        <ButtonsList>
          <li>
            <Button
              type="button"
              data-state="all"
              onClick={this.filterTasks}
              bg={this.state.filter}
            >
              All
            </Button>
          </li>
          <li>
            <Button
              type="button"
              data-state="true"
              onClick={this.filterTasks}
              bg={this.state.filter}
            >
              Done
            </Button>
          </li>
          <Button
            type="button"
            data-state="false"
            onClick={this.filterTasks}
            bg={this.state.filter}
          >
            To Do
          </Button>{' '}
        </ButtonsList>
        <TasksList>
          {tasks
            .filter(task => {
              if (this.state.filter === 'false') {
                return !task.completed;
              } else if (this.state.filter === 'true') {
                return task.completed;
              }
              return task;
            })
            .map(task => (
              <li key={task.id}>
                {' '}
                {task.task}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleCompleted(task.id)}
                />
                <Button onClick={() => deleteTask(task.id)}>Delete</Button>
                <Button onClick={() => showUpdateForm(task.id)}>
                  Update task
                </Button>
              </li>
            ))}
        </TasksList>
      </>
    );
  }
}

RenderTasks.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  task: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ),
};
