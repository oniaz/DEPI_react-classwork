import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('ali')
  var [blogs, setBlogs] = useState(['blog1', 'blog2', 'blog3']);

  console.log(blogs);

  const handleclick = () => {
    setName('omar')
    console.log(name);
    setBlogs(['blog1', 'blog2', 'blog3', 'blog4']);
  }

  return (
    <>
      {name}
      {blogs.map((blog) => {
        return <h1> {blog}</h1>
      })
      }
      <button onClick={handleclick}>change</button>
    </>
  );
}

export default App;
