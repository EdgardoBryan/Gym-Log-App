import React from "react";

const LogTile = (props)=>{
    
    return (
        <div>
            {props.log.date}
            {props.log.weight}
        </div>
    )
}

export default LogTile