import React, { Component } from "react";

class Be extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className="content-card-title">
          <h2>Back-End</h2>
        </div>
        <div className="content-card-list">
          <ul>
            {this.props.data.map(resource => {
              return (
                <li key={resource.id}>
                  <div class="thumbnail-container">
                    <div class="thumbnail">
                      <iframe src={`${resource.link}`} frameborder="0"></iframe>
                    </div>
                  </div>
                  <a href={resource.link} target="_blank">
                  <img src={"https://www.google.com/s2/favicons?domain=" + `${resource.link}`} alt="" />
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

export default Be;
