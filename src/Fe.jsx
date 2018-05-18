import React, { Component } from "react";

class Fe extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className="content-card-title">
          <h2>Front-End</h2>
        </div>
        <div className="content-card-list">
          <ul>
            {this.props.data.map(resource => {
              return (
                <li key={resource.id}>
                  <a href={resource.link} target="_blank">
                    {resource.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="add-btn">
          <a href="" target="_blank" />
        </div>
      </div>
    );
  }
}

export default Fe;
