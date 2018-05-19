import React, { Component } from "react";

class Servers extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className="content-card-title">
          <h2>Servers</h2>
        </div>
        <div className="content-card-list">
          <ul>
            {this.props.data.map(resource => {
              return (
                <li key={resource.id}>
                  <img src={"https://www.google.com/s2/favicons?domain=" + `${resource.link}`} alt="" />
                  <a href={resource.link} target="_blank">
                    {resource.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="add-btn">
          <a href="" />
        </div>
      </div>
    );
  }
}

export default Servers;
