import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        NSS Flights
      </div>
      <div className="navbar-right">
        <span className="navbar-user">Saumya Jain</span>
        <div className="navbar-icons">
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
