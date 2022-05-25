import React, { useState, useEffect } from "react";
import ExerciseForm from "./ExerciseForm";
import ExerciseTile from "./ExerciseTile";


const LogShowPage = (props) => {
  const [log, setLog] = useState({
    date: "",
    weight: "",
    exercises: [],
  });
  

  const fetchLog = async () => {
    try {
      const logId = props.match.params.id;
      const response = await fetch(`/api/v1/logs/${logId}`);
      if (!response.ok) {
        const error = new Error(`${response.status} (${response.statusText})`);
        throw error;
      }
      const responseBody = await response.json();

      setLog(responseBody.log);
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchLog();
  }, []);

  const [errors, setErrors] = useState({});
  const postExerciseForm = async (newExercise) => {
    try {
      const response = await fetch(`/api/v1/logs/${props.match.params.id}/exercises`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newExercise),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        const updatedExercise = log.exercises.concat(body.exercise);
        setErrors([]);
        setLog({ ...log, exercises: updatedExercise });
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };



  const deleteExercise = async (exerciseId) => {
    try {
      const response = await fetch(`/api/v1/exercises/${exerciseId}`, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const respBody = await response.json()
      const filteredExercises = log.exercises.filter((exercise) => exercise.id !== exerciseId)
      setErrors([])
      setLog({ ...log, exercises: filteredExercises })
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }


  const exercisesTiles = log.exercises.map((exercises) => {
    let matchedUser = false
    if (props.user && props.user.id === review.userId) {
      matchedUser = true
    }
    return (
      <ExerciseTile
        key={exercises.id}
        {...exercises}
        name={exercises.name}
        sets={exercises.sets}
        reps={exercises.reps}
        notes={exercises.notes}
        deleteExercise={deleteExercise}
        matchedUser={matchedUser}
      />
    );
  });

  return (
    <div>
      <h1 className="Log-Details tile-show-page">
        Here is the workout for
        <div>Date:{log.date}</div>
        <div>Weight for this day:</div>
        {log.weight}lbs
      </h1>
      {exercisesTiles}
      <ExerciseForm postExerciseForm={postExerciseForm} errors={errors} />
    </div>
  );
};

export default LogShowPage;
