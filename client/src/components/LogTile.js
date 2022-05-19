import React from "react";

const LogTile = (props)=>{
    
    return (
        <div>
         <h1>{props.log.date}</h1>
        <h2>{props.log.weight}</h2>
        </div>
    )
}

export default LogTile