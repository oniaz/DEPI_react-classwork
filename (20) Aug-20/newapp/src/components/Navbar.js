import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
        <li className="navbar-item"><Link to="/signup">Signup</Link></li>
        <li className="navbar-item"><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
