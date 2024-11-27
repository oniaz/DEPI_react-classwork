import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// const Navbar = ({ islogged, handleLogout }) => {
const Navbar = ({ islogged }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo">Home</Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/blogs" className="navbar-links">Blogs List</Link>
        <Link to="/signup" className="navbar-links">Signup</Link>
        {!islogged && <Link to="/login" className="navbar-links">Login</Link>}
        {/* {islogged && (
          <button className="navbar-links" onClick={handleLogout}>Logout</button>
        )} */}
        {islogged && (
          <button className="navbar-links">Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
