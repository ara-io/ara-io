import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../api/apiClient';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await registerUser({ email, password });
      history.push('/login'); // Redirect to the login page after successful registration
    } catch (err) {
      setError('Email already exists');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-field">
          <label htmlFor="email" className="register-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="register-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-form-field">
          <label htmlFor="password" className="register-form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="register-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-form-field">
          <label htmlFor="confirm-password" className="register-form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="register-form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-form-button">
          Register
        </button>
        {error && <div className="register-form-error">{error}</div>}
      </form>
    </div>
  );
};

export default Register;
