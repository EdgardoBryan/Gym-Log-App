import React from "react";

const ExerciseTile = (props)=>{
    const handleDelete = () => {
        props.deleteExercise(props.id)
      }
    let matchedFeatures = []
  if (props.matchedUser) {
    matchedFeatures = [
      <button type="button" className="button sign-button delete-button" onClick={handleDelete}>
        Delete
      </button>
    ]
  }
    return(
        <div className="exercises-show-page">
                <p>Exercise: {props.name} </p>
                <p>Number of Sets:{props.sets}</p>
                <p>Number of Reps: {props.reps}</p>
                <p>Notes: {props.notes}</p>
                <button type="button"
                 className="button sign-button delete-button"
                 onClick={handleDelete}> 
                 Delete
                  </button>
                  <p>{matchedFeatures}</p>
        </div>
    )
}

export default ExerciseTile