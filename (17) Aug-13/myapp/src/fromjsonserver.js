import './fromjsonserver.css'
import { useState, useEffect } from 'react';
import Blog from './Blog';

function Fjs() {
    const [blogsData, setBlogs] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => res.json())
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                })
                .catch(error => console.error('Error fetching blogs:', error));
        }, 2000)
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
            {/* {isLoading?<h1>isLoading...</h1>:null} */}
            {isLoading &&
            <div className='loading'>
                <h1>Loading...</h1>
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg></div>
            }
            <div className="blog-container">
                {filteredBlogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    );

}

export default Fjs;
