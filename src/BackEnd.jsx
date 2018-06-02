import React, { Component } from "react";
import Category from './Category';

class FrontEnd extends Component {
  render() {
    const { data, categoryData, onClick } = this.props;
    return (
      <div onClick={onClick}>
        <div className="content-card-title">
          <h2>Back-End</h2>
          <ul>
            {categoryData.map(category => {
                return (
                  <li key={category.indexOf()}>
                    <Category
                      category={category}
                      target="_blank"
                    >
                      {category}
                    </Category>
                  </li>
              )
            })
          }
          </ul>
        </div>
        <div className="content-card-list">
          <ul>
            {categoryData.map(category => {
                return (
                  <li key={category.indexOf()}>
                    <Category
                      category={category}
                      target="_blank"
                    >
                      {category}
                    </Category>
                  </li>
              )
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

export default FrontEnd;
