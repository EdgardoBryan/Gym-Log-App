import React from "react";

const ExerciseTile = (props)=>{
    
    return(
        <div className="exercises-show-page">
                <p>Exercise: {props.name} </p>
                <p>Number of Sets:{props.sets}</p>
                <p>Number of Reps: {props.reps}</p>
                {props.notes}
        </div>
    )
}

export default ExerciseTile