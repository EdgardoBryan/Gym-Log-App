import React from "react";

const ExerciseTile = (props)=>{
    
    return(
        <div>
            <h6 className="exercises-show-page">
                {props.name}
                {props.sets}
                {props.reps}
                {props.notes}
            </h6>
        </div>
    )
}

export default ExerciseTile