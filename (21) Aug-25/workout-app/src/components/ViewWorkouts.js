import React, { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';
import './ViewWorkouts.css';

const ViewWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:8000/workouts');
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/workouts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setWorkouts((prevWorkouts) => prevWorkouts.filter(workout => workout.id !== id));
        alert('Workout deleted successfully!');
      } else {
        throw new Error('Failed to delete workout');
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <div className="view-workouts">
      <header className="header">
        <h1>Workouts</h1>
      </header>
      <div className="workout-list">
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <WorkoutCard key={workout.id} workout={workout} onDelete={handleDelete} />
          ))
        ) : (
          <p>No workouts available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewWorkouts;
