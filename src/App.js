import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    const names =["pedro","juan","german"];
    return (
      <div>
        <h1>Hola mundo12wqe343</h1>
        <ul>
          {names.map(name=>
          <li>{name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
