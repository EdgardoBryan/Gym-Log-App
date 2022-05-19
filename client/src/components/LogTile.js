import React from "react";

const LogTile = (props)=>{
    
    return (
        <div>
         <h6 className="Log-Boxes">{props.log.date} {props.log.weight}</h6>
        </div>
    )
}

export default LogTile