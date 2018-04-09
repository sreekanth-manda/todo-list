import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.getTodoList();
  }

  getTodoListFromServer = () => {
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open('GET', 'http://127.0.0.1:5000/organizer/tasks');

      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
          reject(Error('Network Error'));
      };

      // Make the request
      req.send();
    });
  }

  getTodoList = () => {
    //let res = new Promise()
    this.getTodoListFromServer().then(response => {
      return JSON.parse(response);
    })
    .then(data => {
      this.setState({todos: data.tasks});
    })
    .catch(err => {
      console.log('Error occured', err);
    });
  }

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
          <ToDoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
};

export default App;
