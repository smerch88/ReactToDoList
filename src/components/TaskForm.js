import React, { Component } from "react";

import { TaskItem } from "./TaskItem";

export class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: "",
    };
  }

  onTaskChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      task: e.target.value,
    }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.task)
      this.setState((prev) => ({
        task: "",
        tasks: [...prev.tasks, { task: this.state.task }],
      }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className="todo__input"
            placeholder="type a task.."
            onChange={this.onTaskChangeHandler}
            value={this.state.task}
          />
          <button className="todo__button">Save</button>
        </form>
        <div>
          {this.state.tasks.map(({ task }, index) => (
            <TaskItem key={task + index} task={task} index={index} />
          ))}
        </div>
      </>
    );
  }
}
