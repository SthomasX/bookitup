import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const categories = ['movies', 'comedy', 'music', 'festivals'];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">
          🎟️ Bookitup
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/${category}`}
              className={`nav-link ${
                location.pathname === `/${category}` ? 'active-link' : ''
              }`}
            >
              {category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Buttons */}
      <div className="login-buttons">
        <Link to="/user-login">
          <button className="btn user-btn">User Login</button>
        </Link>
        <Link to="/admin-login">
          <button className="btn admin-btn">Admin Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
