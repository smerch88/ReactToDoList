import React, { Component } from "react";

import "./styles.scss";

export class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: true,
      click: 0,
    };
  }

  onTaskClickHandler = (e) => {
    this.setState(({ done }) => ({
      done: !done,
    }));
    !this.state.done
      ? (e.currentTarget.className = "todo__task-wrapper notdone")
      : (e.currentTarget.className = "todo__task-wrapper done");
  };

  render() {
    return (
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
