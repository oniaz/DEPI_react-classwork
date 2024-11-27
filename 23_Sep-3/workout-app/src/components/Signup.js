import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Check if user already exists
      const userResponse = await fetch(`http://localhost:8000/users?email=${encodeURIComponent(email)}`);
      
      if (!userResponse.ok) {
        throw new Error('Failed to check user existence');
      }

      const userData = await userResponse.json();

      if (userData.length > 0) { // Assuming the response is an array of users
        setError('User already exists');
        return;
      }

      // Proceed with signup if user does not exist
      const signupResponse = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (signupResponse.ok) {
        // const data = await signupResponse.json(); // Optionally handle the response
        alert('Signup successful!');
        // Redirect or other logic goes here
      } else {
        throw new Error('Failed to sign up');
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <header className="header">
        <h1>Sign up</h1>
      </header>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
