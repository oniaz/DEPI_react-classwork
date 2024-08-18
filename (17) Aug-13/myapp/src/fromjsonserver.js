import './fromjsonserver.css'
import { useState, useEffect } from 'react';
import Blog from './Blog';

function Fjs() {
    const [blogsData, setBlogs] = useState([])
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []); // Empty dependency array means this effect runs once after the initial render

    //   setTimeout(() => {
    //     fetch('http://localhost:8000/blogs')
    //       .then(res => res.json()).then(data => {
    //         setBlogs(data)
    //       })
    //   }, 2000)

    const handleSearch = (event) => {
        console.log(event);
        setSearchTerm(event.target.value);
    };

    const filteredBlogs = blogsData.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );



    return (
        <>
            <input
                className='search-bar'
                type='text'
                placeholder='Search blogs...'
                value={searchTerm}
                onChange={handleSearch}
            />
            <h1>{searchTerm}</h1>
            <div className="blog-container">
                {filteredBlogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    );
    
}

export default Fjs;
