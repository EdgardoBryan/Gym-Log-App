import React from "react";
import { Link } from "react-router-dom";

const LogTile = (props) => {
  return (
    <div>
      <h2 className="Log-Boxes">
        <div>Log of the Day</div>
        Date:{props.log.date} Current Weight:{props.log.weight}
        <div><Link to={`/logs/${props.log.id}`}>Click here for details</Link></div>
      </h2>
    </div>
  );
};

export default LogTile;
