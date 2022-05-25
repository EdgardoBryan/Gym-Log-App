import React from "react";

const ExerciseTile = (props)=>{
    const handleDelete = () => {
        props.deleteExercise(props.id)
      }
    let matchedFeatures = []
  if (props.matchedUser) {
    matchedFeatures = [
      <button type="button" className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    ]
  }
    return(
        <div className="exercises-show-page">
                <div className="workouts-tile">Exercise: {props.name} </div>
                <div className="workouts-tile">Number of Sets:{props.sets}</div>
                <div className="workouts-tile">Number of Reps: {props.reps}</div>
                <div className="workouts-tile">Notes: {props.notes}</div>
                <button type="button"
                 className=" delete-button"
                 onClick={handleDelete}> 
                 Delete
                  </button>
                  <p>{matchedFeatures}</p>
        </div>
    )
}

export default ExerciseTile