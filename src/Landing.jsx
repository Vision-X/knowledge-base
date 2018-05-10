import React, { Component } from 'react';

// use react-tabs for tabular page display
class Landing extends Component {
  render() {
    return (
      <section>
        <div>
          <h2>Front-End</h2>
        </div>
        <div>
          <h2>Back-End</h2>
        </div>
        <div>
          <h2>Servers</h2>
        </div>
        <div>
          <h2>Libraries</h2>
        </div>
      </section>
    )
  }
}

export default Landing;
