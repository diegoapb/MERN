import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    

    this.state = {
      tasks: ["task1","task2","task3","task4","task5"]
    }
  }
  
  render() {
    return (
      
      <div>
        <ul>
          {this.state.tasks.map(task=>
            <li>{task}</li>)}
        </ul>
        <h1>{this.state.tasks}</h1>
        <button onClick = {this.addTask.bind(this)}>Add Task</button>
        <button onClick = {this.updateTask.bind(this)}>Update Task</button>
      </div>
    );
  }

  addTask(){
    this.setState({
      tasks:this.state.tasks.concat("new task")
    })
  }

  updateTask(){
    const index=2;

    const tasks=this.state.tasks;
    this.setState(
      {tasks:[
        ...tasks.slice(0,index),
        "actualizado",
        ...tasks.slice(index+1)
      ]}
    );
  }
}

export default App;
