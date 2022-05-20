import React from "react";

const ExerciseTile = (props)=>{
    
    return(
        <div>
            <h1 className="exercises-show-page">Exercise: {props.name}</h1>
                <p className="exercises-show-page">Number of Sets: {props.sets}</p>
                <p className="exercises-show-page">Number of Reps: {props.reps}</p>
                {props.notes}
        </div>
    )
}

export default ExerciseTile