import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '/Users/guotianfu/Desktop/hackaton/src/front-end/LoginPage/LoginPage.js'; 
import './Navbar.css';
import logo from "/Users/guotianfu/Desktop/hackaton/src/icons8-puzzle-64.png"
import pfp from './Circle-icons-profile.svg.png'

const Navbar = () => {
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const [showDropdownJoin, setShowDropdownJoin] = useState(false);

  const { isLoggedIn, user } = useAuth();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-title">StudyLAH!</h1>
          <Link to='/'>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <ul className="navbar-ul">
            <li className="navbar-li dropdown"
                onMouseEnter={() => setShowDropdownAbout(true)}
                onMouseLeave={() => setShowDropdownAbout(false)}>
              About
              {showDropdownAbout && (
                <ul className="dropdown-content">
                  <li><a href="#">Submenu Item 1</a></li>
                  <li><a href="#">Submenu Item 2</a></li>
                </ul>
              )}
            </li>
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
          </ul>
        </div>
        {!isLoggedIn && (
            <div className="navbar-right">
              <button className="login-button">
                <Link to="/login" style={{textDecoration: 'none'}}>Log In</Link>
              </button>
            </div>
        )}
        {isLoggedIn && (
          <div className="navbar-right">
            <Link to={`/profile/${user.username}`} style={{textDecoration: 'none', color: 'black'}}>
              <img className="pfp" src= {pfp} alt="profile"></img>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;