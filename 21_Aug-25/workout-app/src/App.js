import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ViewWorkouts from './components/ViewWorkouts';
import AddWorkout from './components/AddWorkout';
import Login from './components/Login';
import Signup from './components/Signup';  

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
