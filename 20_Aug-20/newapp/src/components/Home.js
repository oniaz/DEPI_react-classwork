import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website!</h1>
        <p>Your go-to place for amazing content and features.</p>
      </header>
      <section className="home-content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec tincidunt arcu. Curabitur sit amet libero nec nulla gravida venenatis.</p>
        <h2>Latest Blogs</h2>
        <p>Check out our latest blogs to stay updated with the most interesting topics.</p>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
