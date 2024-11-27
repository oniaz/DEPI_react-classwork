import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { useNavigate } from 'react-router-dom';



import Navbar from './Navbar';
import Home from './Home';
import BlogList from './BlogList';
import Signup from './Signup';
import Login from './Login';

import { useEffect, useState } from 'react';


function App() {
  // const navigate = useNavigate();

  const [islogged, setLogged] = useState(false);
  const handleLogin = () => {
    setLogged(true);
  }
  useEffect(() => { }, [islogged]);
  // const handleLogout = () => {
  //   setLogged(false);
  //   navigate('/login');
  // }


  return (
    <>
      <div>
        <BrowserRouter>
        {/* <Navbar islogged={islogged} logout={handleLogout}></Navbar> */}
          <Navbar islogged={islogged}></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/login" element={<Login islogged={islogged} handleLogin={handleLogin} />} />
            {/* <Route path="/login" element={<Login islogged={islogged} handleLogin={handleLogin} handleLogout={handleLogout} />} /> */}
            <Route path="/Signup" element={<Signup />} />
            {/* <Route path= "/logout" element = {<Signup/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
