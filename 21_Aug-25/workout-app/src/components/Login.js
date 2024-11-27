import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/users?email=${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();
      if (data.length === 0) {
        setError('User does not exist');
        return;
      }

      const user = data[0];

      if (user.password !== password) {
        setError('Incorrect password');
        return;
      }

      alert('Login successful!');
      // Redirect or other logic goes here

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <header className="header">
        <h1>Login</h1>
      </header>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
