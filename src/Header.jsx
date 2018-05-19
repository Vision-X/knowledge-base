import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>RE:SOURCEs</h1>
        <nav>
          <ul>
        {/*}    <li>
              <NavLink to="/">HOME</NavLink> }
            </li> */}
            <li>
              <NavLink to="/">FE</NavLink>
            </li>
            <li>
              <NavLink to="/">BE</NavLink>
            </li>
            <li>
              <NavLink to="/">SERVERS</NavLink>
            </li>
            <li>
              <NavLink to="/">LIBS</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
