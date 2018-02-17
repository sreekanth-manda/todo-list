import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div>
        <ToDoList todos={this.props.todos} />
      </div>);
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
};

export default App;
