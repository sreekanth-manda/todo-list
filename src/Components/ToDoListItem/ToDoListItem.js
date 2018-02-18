import React from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = (props) => {
  return (
    <tr>
      <td><label><input type="checkbox" value="notDone" /></label></td>
      <td>{props.todoItem.id}</td>
      <td>{props.todoItem.taskName}</td>
      <td>{props.todoItem.status ? 'Done' : 'Pending'}</td>
    </tr>
  );
};

ToDoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired
};

export default ToDoListItem;
