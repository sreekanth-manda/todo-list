import React from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = (props) => {
  const todos = props.todoItems;
  const litsItems = todos.map( (item, key) =>
    <li key={key.toString()}>
      <div>
        <div>{item.id}</div>
        <div>{item.taskName}</div>
        <div>{item.status.toString()}</div>
      </div>
    </li>
  );

  return (
    <div>
      <ul>{litsItems}</ul>
    </div>
  );
};

ToDoListItem.propTypes = {
  todosItems: PropTypes.array.isRequired
};

export default ToDoListItem;
