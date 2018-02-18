import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="jumbotron">
          <span className="h2 text-center">To-Do List</span>
          <ToDoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
};

export default App;
