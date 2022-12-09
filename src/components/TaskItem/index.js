import React, { Component } from "react";

import "./styles.scss";

export class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: "notdone",
      click: 0,
    };
  }

  onTaskClickHandler = (e) => {
    if (this.state.click % 2) {
      this.setState((prev) => ({
        ...prev,
        done: "notdone",
        click: ++prev.click,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        done: "done",
        click: ++prev.click,
      }));
    }
    e.currentTarget.className = this.done;
  };

  render() {
    return (
      <div
        className={`todo__task-wrapper ${this.state.done}`}
        onClick={this.onTaskClickHandler}
      >
        <p className="todo__task-number">#{this.props.index}</p>
        <p className="todo__task-text">{this.props.task}</p>
      </div>
    );
  }
}
