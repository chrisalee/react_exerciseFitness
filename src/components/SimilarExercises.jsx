import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="similarExercises">
      <h2 className="similarExercises-heading">
        Similar <span>Target Muscle</span> exercises
      </h2>
      <div className="similarExercises-row">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <h2 className="similarExercises-heading2">
        Similar <span>Equipment</span> exercises
      </h2>
      <div className="similarExercises-row">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
