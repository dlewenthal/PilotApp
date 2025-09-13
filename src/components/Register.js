import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    employeeId: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      return setError('Passwords do not match');
    }

    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    if (!formData.employeeId.match(/^\d{5,7}$/)) {
      return setError('Employee ID must be 5-7 digits');
    }

    try {
      setError('');
      setMessage('');
      setLoading(true);
      
      const displayName = `${formData.firstName} ${formData.lastName}`;
      const userCredential = await signup(formData.email, formData.password, displayName, formData.employeeId);
      
      // Get the Firebase user to create database record
      const firebaseUser = userCredential.user;
      
      // Test connection first
      console.log('Testing backend connection...');
      const testResponse = await fetch('/api/debug/test-connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          test: 'connection test',
          timestamp: new Date().toISOString()
        })
      });
      
      const testResult = await testResponse.json();
      console.log('Backend connection test:', testResult);
      
      // Create user record in our database
      console.log('Calling backend registration...', {
        firebaseUid: firebaseUser.uid,
        email: formData.email,
        employeeId: formData.employeeId,
        firstName: formData.firstName,
        lastName: formData.lastName
      });
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firebaseUid: firebaseUser.uid,
          email: formData.email,
          employeeId: formData.employeeId,
          firstName: formData.firstName,
          lastName: formData.lastName
        })
      });
      
      console.log('Registration response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        throw new Error(errorData.error || 'Failed to create user profile');
      }
      
      const registrationResult = await response.json();
      console.log('Registration successful:', registrationResult);
      
      setMessage('Account created successfully! Please check your email to verify your account. Redirecting to login page...');
      
      // Redirect to login after showing success message
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (error) {
      setError('Failed to create account: ' + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Delta Pilot Registration</h2>
        {error && <div className="alert alert-error">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              placeholder="5-7 digit employee number"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your company or personal email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button disabled={loading} className="btn-primary" type="submit">
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <div className="auth-links">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;