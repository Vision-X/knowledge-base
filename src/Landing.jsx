import React, { Component } from 'react';

// use react-tabs for tabular page display
class Landing extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick = (event) => {
      console.log(this, 'dis');
      console.log(event.target, 'evt tgt');
  }


  render() {
    return (
      <section>
        <div onClick={this._onClick} >
          <div className="content-card-title">
            <h2>Front-End</h2>
          </div>
          <div className="content-card-list">
            <ul>
              <li>placeholder</li>
              <li>anotherone</li>
              <li>yas</li>
            </ul>
          </div>
        </div>
        <div onClick={this._onClick} >
          <div className="content-card-title">
            <h2>Back-End</h2>
          </div>
          <div className="content-card-list">
            <ul>
              <li>placeholder</li>
              <li>anotherone</li>
              <li>yas</li>
            </ul>
          </div>
        </div>
        <div onClick={this._onClick} >
          <div className="content-card-title">
            <h2>Servers</h2>
          </div>
          <div className="content-card-list">
            <ul>
              <li>placeholder</li>
              <li>anotherone</li>
              <li>yas</li>
            </ul>
          </div>
        </div>
        <div onClick={this._onClick} >
          <div className="content-card-title">
            <h2>Libraries</h2>
          </div>
          <div className="content-card-list">
            <ul>
              <li>placeholder</li>
              <li>anotherone</li>
              <li>yas</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing;
