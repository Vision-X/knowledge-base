import React, { Component, Fragment } from 'react';

export default class Category extends Component {
  render() {
    const { category } = this.props;
    return (
        <Fragment>
          <a href="" target="_blank">{category}</a>
        </Fragment>
    )
  }
}
