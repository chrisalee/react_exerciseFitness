import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="row">
        <button className="exercise-btn bp">{exercise.bodyPart}</button>
        <button className="exercise-btn targ">{exercise.target}</button>
      </div>
      <p className="exercise-name">{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
