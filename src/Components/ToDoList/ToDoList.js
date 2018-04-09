import React, { Component, PropTypes } from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import classnames from 'classnames';
import './ToDoList.scss';

const ADD_TASK_TEXT = 'Add Task';
const DELETE_TASK_TEXT = 'Delete Task';

const addTask = () => {
  console.log('Add Task is clicked');
};

const deleteTask = () => {
  console.log('Delete task is clicked');
}

const ToDoList = (props) => {
  let classes = classnames('delete-task','btn','btn-primary delete-task');

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {props.todos.map( (todo, key) => {
              return <ToDoListItem todoItem={todo} key={key} />;
            })}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={addTask} >
        {ADD_TASK_TEXT}
      </button>
      <button
        className={classes}
        onClick={deleteTask} >
        {DELETE_TASK_TEXT}
      </button>
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ToDoList;
