import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ViewWorkouts from './components/ViewWorkouts';
import AddWorkout from './components/AddWorkout';
import Login from './components/Login';
import Signup from './components/Signup';  

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ email: '', name: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-workouts" element={<ViewWorkouts />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
