import React, { Component } from 'react';
import Li from './Li';
import Be from './Be';

class SearchBox extends Component {
  render() {
    const { onClick, data, data2 } = this.props;
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
        <div className="dizzle">
          <p>Hello this is data</p>
          <Be data={data2} onClick={onClick} />
          <Li data={data} onClick={onClick} />
        </div>
      </article>
    )
  }
}

export default SearchBox;
