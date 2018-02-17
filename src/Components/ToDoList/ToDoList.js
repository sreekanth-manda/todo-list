import React, { Component, PropTypes } from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = (props) => {
  return (
    <div>
      {console.log(props.todos)}
      <ToDoListItem todoItems={props.todos} />
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ToDoList;
