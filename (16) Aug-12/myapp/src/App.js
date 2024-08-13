import './App.css';
import { useState } from 'react';

function App() {
  var [blogs, setBlogs] = useState(['blog1', 'blog2', 'blog3']);
  // const [name, setName] = useState('ali')

  console.log(blogs);

  const handleclick = () => {
    setBlogs(['blog1', 'blog2', 'blog3', 'blog4']);
  }
  // const handleClick = () => {
  //   setName('omar')
  //   console.log(name);
  // }

  return (
    <>
      {blogs.map((blog) => {
        return <h1> {blog}</h1>
      })
      }
      <button onClick={handleclick}>change</button>
    </>
  );
  // return (
  //   <>
  //     <h1>
  //       {name}
  //     </h1>
  //     <button onClick={handleClick}>change</button>
  //   </>
  // )
}

export default App;
