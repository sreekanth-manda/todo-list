import React from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = (props) => {
  return (
    <tr>
      <td><label><input type="checkbox" value="notDone" /></label></td>
      <td>{props.todoItem.id}</td>
      <td>{props.todoItem.title}</td>
      <td>{props.todoItem.done ? 'Done' : 'Pending'}</td>
    </tr>
  );
};

ToDoListItem.propTypes = {
  todoItem: PropTypes.object.isRequired
};

export default ToDoListItem;
