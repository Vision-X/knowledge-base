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
              if (resource.title && resource.link) {
                return (
                  <li key={resource.id}>
                    <div class="thumbnail-container">
                      <div class="thumbnail">
                        <iframe src={`https://api.thumbnail.ws/api/ + ${process.env.API_KEY} + /thumbnail/get?url=${resource.link} + &width=900&delay=5000`} frameborder="0"></iframe>
                      </div>
                    </div>
                    <a href={resource.link} target="_blank">
                    <img src={"https://www.google.com/s2/favicons?domain=" + `${resource.link}`} alt="" />
                      {resource.title}
                    </a>
                  </li>
                );
              }
            })
          }
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
