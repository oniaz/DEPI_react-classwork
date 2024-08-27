import React from 'react';
import './Blog.css'; // Import the CSS file for styling

const Blog = ({ title, content, author, onDelete }) => {
  return (
    <div className="blog-item">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
      <p className="blog-author"><strong>Author:</strong> {author}</p>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Blog;
