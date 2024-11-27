import React, { useContext } from 'react';
import './HomePage.css';
import HomePageWorkoutImage from '../assets/images/w1.jpg';
import { UserContext } from '../App';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to WorkoutApp</h1>
        <p>Your personal fitness companion for tracking and managing your workouts.</p>
        {user.name ? (
          <p>Welcome, {user.name}!</p>
        ) : (
          <p>Get started by logging in or signing up.</p>
        )}
        <img src={HomePageWorkoutImage} alt="Fitness" className="hero-image" />
      </header>
    </div>
  );
};

export default HomePage;
