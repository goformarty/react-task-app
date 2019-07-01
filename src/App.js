import React, {Component} from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Task from './oop-task.js';

class App extends Component{
  render() {
    return (
      <div className="App">
      <div class="ui three item menu">
        <a class="active item">Editorials</a>
        <a class="item">Reviews</a>
        <a class="item">Upcoming Events</a>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Task Tracker App</h1>
        </header>
        <Task />
        <Task content="Complete stretch exercises" />
        <Task content="Perform actual stretch exercises" />
      </div>
    )
  }
}

export default App;
