import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{10,15}$/;

    if (!emailPattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
      setError('Invalid email or phone number format');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const dummyEmail = 'user@example.com';
    const dummyPhone = '+911234567890';
    const dummyPassword = 'user123';

    const isValidUser =
      (emailOrPhone === dummyEmail || emailOrPhone === dummyPhone) &&
      password === dummyPassword;

    if (isValidUser) {
      setError('');
      alert('Login successful!');
      navigate('/user/home');
    } else {
      setError('Incorrect email/phone or password');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <button onClick={handleSignUp} className="signup-button">Sign Up for New User</button>
      </div>
    </div>
  );
};

export default LoginPage;
