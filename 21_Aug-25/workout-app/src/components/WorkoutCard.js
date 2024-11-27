import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ workout, onDelete }) => {
  return (
    <div className="workout-card">
      <h2 className="workout-title">{workout.title}</h2>
      <p className="workout-description">{workout.description}</p>
      <p className="workout-sets">Sets: {workout.sets}</p>
      <button onClick={() => onDelete(workout.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default WorkoutCard;
