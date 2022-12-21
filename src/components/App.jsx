import { Component } from 'react';
import { ToDoForm } from './ToDoList/ToDoForm';
import { RenderTasks } from './RenderTasks/RenderTasks';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    tasks: [
      { id: 'id-1', task: 'to do something1', completed: false },
      { id: 'id-2', task: 'to do something2', completed: false },
      { id: 'id-3', task: 'to do something3', completed: false },
      { id: 'id-4', task: 'to do something4', completed: true },
    ],
  };

  addTask = data => {
    const newTask = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  deleteTask = taskID => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(({ id }) => id !== taskID),
    }));
  };

  toggleCompleted = todoID => {
    console.log(todoID);

    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === todoID) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    }));
  };

  showUpdateForm = taskId => {
    const { tasks } = this.state;
    const task = tasks.find(({ id }) => id === taskId);
    this.setState({ taskToUpdate: task });
  };

  render() {
    const { addTask, deleteTask, toggleCompleted, showUpdateForm } = this;
    return (
      <>
        <ToDoForm addTask={addTask} />
        <RenderTasks
          tasks={this.state.tasks}
          deleteTask={deleteTask}
          onToggleCompleted={toggleCompleted}
          showUpdateForm={showUpdateForm}
        />
      </>
    );
  }
}
