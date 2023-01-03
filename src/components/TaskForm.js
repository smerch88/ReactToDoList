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

  todoButtonClickHandler = (e) => {
    const cardsDone = document.querySelectorAll(".done");
    const cardsNotDone = document.querySelectorAll(".notdone");

    cardsDone.forEach((card) => {
      card.style.display = "none";
    });

    cardsNotDone.forEach((card) => {
      card.style.display = "flex";
    });
  };

  doneButtonClickHandler = (e) => {
    const cardsDone = document.querySelectorAll(".done");
    const cardsNotDone = document.querySelectorAll(".notdone");

    cardsNotDone.forEach((card) => {
      card.style.display = "none";
    });

    cardsDone.forEach((card) => {
      card.style.display = "flex";
    });
  };

  allButtonClickHandler = (e) => {
    const cardsAll = document.querySelectorAll(".todo__task-wrapper");

    cardsAll.forEach((card) => {
      card.style.display = "flex";
    });
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
        <div className="filter-buttons">
          <button
            type="button"
            className="todo__button"
            onClick={this.todoButtonClickHandler}
          >
            To Do
          </button>
          <button
            type="button"
            className="todo__button"
            onClick={this.doneButtonClickHandler}
          >
            Done
          </button>
          <button
            type="button"
            className="todo__button"
            onClick={this.allButtonClickHandler}
          >
            All
          </button>
        </div>
        <div>
          {this.state.tasks.map(({ task }, index) => (
            <TaskItem key={task + index} task={task} index={index} />
          ))}
        </div>
      </>
    );
  }
}
