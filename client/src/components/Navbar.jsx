import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Bookitup</Link>
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>

      {/* Login Buttons */}
      <div className="login-buttons">
        <Link to="/user-login">
          <button className="user-btn">User Login</button>
        </Link>
        <Link to="/admin-login">
          <button className="admin-btn">Admin Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
