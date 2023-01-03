import React, { Component } from "react";

import "./styles.scss";

export class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      click: 0,
    };
  }

  onTaskClickHandler = (e) => {
    this.setState(({ done }) => ({
      done: !done,
    }));
  };

  render() {
    return this.state.done ? (
      <div
        className={`todo__task-wrapper done`}
        onClick={this.onTaskClickHandler}
      >
        <p className="todo__task-number">#{this.props.index}</p>
        <p className="todo__task-text">{this.props.task}</p>
      </div>
    ) : (
      <div
        className={`todo__task-wrapper notdone`}
        onClick={this.onTaskClickHandler}
      >
        <p className="todo__task-number">#{this.props.index}</p>
        <p className="todo__task-text">{this.props.task}</p>
      </div>
    );
  }
}
