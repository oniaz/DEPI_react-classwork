import './Blog.css';
import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className='blog'>
            <div className='blog-info'>
                <h2 className='blog-title'>{blog.title}</h2>
                <p className='blog-author'> {blog.author}</p>
            </div>
            <div className='blog-content'>
                <p>{blog.content}</p>
            </div>
            <div className='blog-actions'>
                <button className='delete-btn'>Delete</button>
            </div>
        </div>
    )
}

export default Blog;
