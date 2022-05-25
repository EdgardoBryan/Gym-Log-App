import React, { useState } from "react";
import translateServerErrors from "../services/translateServerErrors";

const ExerciseForm = (props) => {
  const [newExercise, setNewExercise] = useState({
    name: "",
    sets: "",
    reps: "",
    notes: "",
  });

  const handleChange = (event) => {
    setNewExercise({
      ...newExercise,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const clearForm = () => {
    setNewExercise({
      name: "",
      sets: "",
      reps: "",
      notes: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.postExerciseForm(newExercise);
    clearForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Exercise Name:
          <input name="name" type="text" onChange={handleChange} value={newExercise.name} />
        </label>
        <label htmlFor="sets">
          Sets:
          <input name="sets" type="text" onChange={handleChange} value={newExercise.sets} />
        </label>
        <label htmlFor="reps">
          Reps:
          <input name="reps" type="text" onChange={handleChange} value={newExercise.reps} />
        </label>
        <label htmlFor="notes">
          Notes:
          <input name="notes" type="text" onChange={handleChange} value={newExercise.notes} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ExerciseForm;

// handle response!
// this should move to the component where state is defined for the exercises listed on the page
// that way you can easily add (concat / spread operator) to state - just like the reviews in GP

// size input fields of the forms
// ad consider adding background color so you can see text against pictures
// could even be faded/ translucent/ transparent so you can see the image behind it
// with background images look into background no-repeat, position image centered on screen / sizing background images
