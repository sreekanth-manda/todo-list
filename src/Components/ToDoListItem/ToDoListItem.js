import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = props => {
  const [ todos ] = props.todoItems;
  console.log(todos);
  return (
    <div>
      {todos}.array.forEach( element => {
        constructor.log(element)
      })
    </div>
  );
};

ToDoListItem.propTypes = {
  todosItems: PropTypes.array.isRequired
};

export default ToDoListItem;
