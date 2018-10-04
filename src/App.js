import React, { Component } from 'react';

import './App.css';

import Welcome from "./title"

class App extends Component {
  render() {
    const names=["Pedro","Pipe","Juan"];
    return (
      <div>
        {names.map(name =>
        <Welcome name={name} />
        )}
      </div>
    );
  }
}

export default App;
