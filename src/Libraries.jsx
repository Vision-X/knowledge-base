import React, { Component } from 'react';

class Libraries extends Component {
  render() {
    return (
      <div onClick={this._onClick} >
        <div className="content-card-title">
          <h2>Libraries</h2>
        </div>
        <div className="content-card-list">
          <ul>
            {this.props.data.map(resource => {
                return (<li><a href={resource.link} target="_blank">{resource.title}</a></li>)
              })
            }
          </ul>
        </div>
        <div className="add-btn">
          <a href=""></a>
        </div>
      </div>
    )
  }
}

export default Libraries;
