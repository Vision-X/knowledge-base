import React, { Component } from "react";

class Se extends Component {
  render() {
    const { data, onClick } = this.props;
    return (
      <div onClick={onClick}>
    {/*    <div className="content-card-title">
          <h2>Servers</h2>
        </div> */}
        <div className="content-card-list">
          <ul>
            {data.map(resource => {
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

export default Se;
