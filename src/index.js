import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const sampleData = [{
    id: 1,
    taskName: 'sam',
    status: true
  },
  {
    id: 2,
    taskName: 'sam2',
    status: false
  }
];

ReactDOM.render( <
  App todos = {
    sampleData
  }
  />,
  document.getElementById('app')
);
