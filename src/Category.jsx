import React, { Component, Fragment } from 'react';

export default class Category extends Component {
  render() {
    const { categoryData } = this.props;
    return (
        <div>
          <button>{categoryData[0]}</button>
          <button>{categoryData[1]}</button>
          <button>{categoryData[2]}</button>
          <button>{categoryData[3]}</button>
          <button>{categoryData[4]}</button>
          <button>{categoryData[5]}</button>
        </div>
    )
  }
}
