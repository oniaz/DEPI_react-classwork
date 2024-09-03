import React, { useState } from 'react';
import './AddWorkout.css';

const AddWorkout = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sets, setSets] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (!title || !description || !sets) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/workouts', { // Adjust the API endpoint as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, sets }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setSets('');
        alert('Workout added successfully!');
      } else {
        throw new Error('Failed to add workout');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="add-workout">
      <header className="header">
        <h1>Add Workout</h1>
      </header>
      <form className="workout-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="sets">Sets</label>
        <input
          type="text"
          id="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
