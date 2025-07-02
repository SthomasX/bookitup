import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const categories = ['movies', 'comedy', 'music', 'festivals'];
  
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Bookitup</Link>
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        {categories.map((category) => (
          <li key={category}>
            <Link 
              to={`/${category}`} 
              className="nav-link"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
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