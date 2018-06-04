import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <article className="search-box" onClick={onClick}>
        <div className="content-card-search">
          <div className="search-and-btn">
            <input type="text" name="" placeholder="Search All Bookmarks" />
            <button type="button">Find</button>
          </div>
        {/*  <div className="topic-btn-box">
            <button className="topic-btn" type="button">FrontEnd</button>
            <button className="topic-btn" type="button">BackEnd</button>
            <button className="topic-btn" type="button">Servers</button>
            <button className="topic-btn" type="button">Libraries</button>
          </div> */}
        </div>
      </article>
    )
  }
}

export default SearchBox;
