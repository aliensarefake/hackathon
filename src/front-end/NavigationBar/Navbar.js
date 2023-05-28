import React, { useState } from 'react';
import './Navbar.css';
import logo from "/Users/guotianfu/Desktop/hackaton/src/icons8-puzzle-64.png"
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const [showDropdownJoin, setShowDropdownJoin] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-title">StudyLAH!</h1>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="navbar-ul">
            <li className="navbar-li dropdown"
                onMouseEnter={() => setShowDropdownAbout(true)}
                onMouseLeave={() => setShowDropdownAbout(false)}>
              About Us
              {showDropdownAbout && (
                <ul className="dropdown-content">
                  <li><a href="#">Submenu Item 1</a></li>
                  <li><a href="#">Submenu Item 2</a></li>
                </ul>
              )}
            </li>
            {isLoggedIn && (
              <li className="navbar-li dropdown"
                  onMouseEnter={() => setShowDropdownResources(true)}
                  onMouseLeave={() => setShowDropdownResources(false)}>
                Resources
                {showDropdownResources && (
                  <ul className="dropdown-content">
                    <li><a href="#">Submenu Item 1</a></li>
                    <li><a href="#">Submenu Item 2</a></li>
                  </ul>
                )}
              </li>
            )}
            {!isLoggedIn && (
              <li className="navbar-li dropdown"
                  onMouseEnter={() => setShowDropdownJoin(true)}
                  onMouseLeave={() => setShowDropdownJoin(false)}>
                Join Us
                {showDropdownJoin && (
                  <ul className="dropdown-content">
                    <li><a href="#">Submenu Item 1</a></li>
                    <li><a href="#">Submenu Item 2</a></li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
        {!isLoggedIn && (
          <div className="navbar-right">
            <button className="login-button">Log In</button>
          </div>
        )}
        {isLoggedIn && (
          <div className="navbar-right">
            <a href="#" className="user-profile">Profile</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
