import React, { Component, PropTypes } from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = (props) => {
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
            {props.todos.map( (todo) => {
              return <ToDoListItem todoItem={todo} />
            })}
        </tbody>
      </table>
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ToDoList;
