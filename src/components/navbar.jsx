import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="fa-solid fa-calendar-check"></i>
        <span> To do List & Counter </span>
        <span className="navbar-count">
          {this.props.totalCount}
        </span>
        
      </nav>
    );
  }
}

export default Navbar;