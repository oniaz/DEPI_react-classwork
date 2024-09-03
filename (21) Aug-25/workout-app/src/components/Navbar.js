import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">WorkoutApp</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/add-workout">Add Workout</Link></li>
        <li><Link to="/view-workouts">View Workouts</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
