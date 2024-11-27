import './App.css';
import { useState } from 'react';
import Blog from './Blog';

function App() {
  const [blogsData, setBlogs] = useState([
    { title: 'blog1', author: 'author1', content: "content 1" },
    { title: 'blog2', author: 'author2', content: "content 2" },
    { title: 'blog3', author: 'author3', content: "content 3" },
    { title: 'blog4', author: 'author4', content: "content 4" },
  ])

  const [searchTerm, setSearchTerm] = useState('rfghjfhdj');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
      className='search-bar'
      type='text'
      placeholder='Search blogs...'
      value={searchTerm}
      onChange={handleSearch} ></input>
      <h1>{searchTerm}</h1>
      {
        blogsData.map((blog) => {
          return (
            <Blog blog={blog} />
          )
        })
      }
    </>
  )
}
export default App;
