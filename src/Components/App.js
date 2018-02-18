import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Organizer</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </nav>
        <div className="jumbotron">
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
