import React, { useState } from 'react';
import './login.css';
import Lottie from 'lottie-react';
import login from '../assets/login.json';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [popup, setPopup] = useState({
    visible: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showPopup = (message, type) => {
    setPopup({ visible: true, message, type });

    // Hide popup after 2 seconds
    setTimeout(() => {
      setPopup({ visible: false, message: '', type: '' });

      if (type === 'success') {
        navigate('/dashboard');
      }
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/login-system/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
// Save username to localStorage after using
  localStorage.setItem('username', data.name);
  

          showPopup(`Welcome, ${data.name}!`, 'success');
        } else {
          showPopup(data.message, 'error');
        }
      })
      .catch(() => {
        showPopup('Login failed. Try again.', 'error');
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>

      <div className="login-animation-section">
        <Lottie animationData={login} loop={true} />
      </div>

      {/* ✅ Center Toast Popup */}
      {popup.visible && (
        <div className={`popup-message ${popup.type}`}>
          {popup.type === 'success' ? (
            <FaCheckCircle className="popup-icon" />
          ) : (
            <FaTimesCircle className="popup-icon" />
          )}
          <span>{popup.message}</span>
        </div>
      )}
    </div>
  );
};

export default Login;
