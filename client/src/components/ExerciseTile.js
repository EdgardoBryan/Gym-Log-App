import React from "react";

const ExerciseTile = (props)=>{
    // handleDelete = ()=>{
    //     props.handleDelete(props.id)
    // }
    return(
        <div className="exercises-show-page">
                <p>Exercise: {props.name} </p>
                <p>Number of Sets:{props.sets}</p>
                <p>Number of Reps: {props.reps}</p>
                <p>Notes: {props.notes}</p>
        </div>
    )
}

export default ExerciseTile