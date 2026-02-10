import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check credentials
    if (registrationNo === 'IT22113122' && password === 'Chmara1=') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    } else {
      setError('Invalid Registration Number or Password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <img 
            src="/asset/SLIIT-UNI-LOGO.png" 
            alt="SLIIT University - The Knowledge University" 
            className="logo"
          />
        </div>
        
        <div className="login-header">
          <h1>Student Profile.</h1>
          {error && <p className="error-message">{error}</p>}
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="registration">Registration No</label>
            <input
              type="text"
              id="registration"
              className="form-control"
              placeholder="Enter Your Registration No."
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="privacy-link">
            <a href="#privacy">Privacy & Policy</a>
          </div>

          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        <div className="footer">
          <p>Copyright © Version - 24.03.01 All Rights Reserved.</p>
          <p className="footer-dept">Business Application Services Division - SLIIT.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
