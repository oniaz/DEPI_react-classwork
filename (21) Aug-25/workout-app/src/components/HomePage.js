import React from 'react';
import './HomePage.css';
import HomePageWorkoutImage from '../assets/images/w1.jpg';
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to WorkoutApp</h1>
        <p>Your personal fitness companion for tracking and managing your workouts.</p>
        <img src={HomePageWorkoutImage} alt="Fitness" className="hero-image" />
      </header>
    </div>
  );
};

export default HomePage;
