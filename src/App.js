import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
  }

  _onClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <HashRouter>
        <div className="App" onClick={this._onClick}>
        </div>
      </HashRouter>
    );
  }
}

export default App;
