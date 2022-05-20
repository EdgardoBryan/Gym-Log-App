import React from "react";

const LogTile = (props)=>{
    
    return (
        <div>
         <h2 className="Log-Boxes">Date:{props.log.date} Current Weight:{props.log.weight}</h2>
        </div>
    )
}

export default LogTile