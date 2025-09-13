import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function ManualUserCreator() {
  const [formData, setFormData] = useState({
    employeeId: '',
    firstName: '',
    lastName: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!currentUser) {
      setError('You must be logged in to create a user record');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setMessage('');
      
      console.log('Creating user record manually for Firebase user:', currentUser.uid);
      
      const token = await currentUser.getIdToken();
      
      const response = await fetch('/api/auth/create-user-record', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          employeeId: formData.employeeId,
          firstName: formData.firstName,
          lastName: formData.lastName
        })
      });
      
      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
      if (response.ok) {
        setMessage(`User record created successfully! Firebase UID ${currentUser.uid} is now linked to employee ${formData.employeeId}`);
        setFormData({ employeeId: '', firstName: '', lastName: '' });
      } else {
        setError(`Error: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Manual user creation error:', error);
      setError(`Error: ${error.message}`);
    }
    
    setLoading(false);
  }

  if (!currentUser) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Manual User Creation</h2>
          <p>You must be logged in to use this tool.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Manual User Record Creation</h2>
        <p><strong>Firebase User:</strong> {currentUser.email} ({currentUser.uid})</p>
        
        {error && <div className="alert alert-error">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              placeholder="e.g., 0685141"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
            <small>Use a 7-digit employee ID like: 0685141, 0686339, 0690893</small>
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
          
          <button disabled={loading} className="btn-primary" type="submit">
            {loading ? 'Creating User Record...' : 'Create User Record'}
          </button>
        </form>
        
        <div className="auth-links" style={{marginTop: '20px'}}>
          <p>Available Employee IDs for testing:</p>
          <ul style={{textAlign: 'left', fontSize: '14px'}}>
            <li><strong>0685141</strong> - RHODES D R</li>
            <li><strong>0686339</strong> - OLSON L R</li>
            <li><strong>0690893</strong> - YOUNG D L</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManualUserCreator;