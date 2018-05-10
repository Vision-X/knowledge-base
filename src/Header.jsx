import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>KnowledgeStash</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">FE</NavLink>
            </li>
            <li>
              <NavLink to="/">BE</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
