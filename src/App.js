import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './auth.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PilotSeniorityLookup from './PilotSeniorityLookup';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UserInfo from './components/UserInfo';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

// Public Route Component (redirects to dashboard only if logged in AND verified)
function PublicRoute({ children }) {
  const { currentUser } = useAuth();
  return (!currentUser || !currentUser.emailVerified) ? children : <Navigate to="/dashboard" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/user-info" element={
              <ProtectedRoute>
                <UserInfo />
              </ProtectedRoute>
            } />
            
            {/* Legacy public search (for now) */}
            <Route path="/search" element={<PilotSeniorityLookup />} />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
