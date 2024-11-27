import React, { useEffect, useState } from 'react';
import './BlogList.css'; // Import the CSS file for styling
import Blog from './Blog';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsloading] = useEffect([]);

    return (
        <>
        {
            blogs && blogs.map(

            )
        }
        </>
    )
}

export default BlogList;