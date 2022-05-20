import React from "react";

const LogTile = (props) => {
  return (
    <div>
      <h2 className="Log-Boxes">
        <div>Log of the Day</div>
        Date:{props.log.date} Current Weight:{props.log.weight}
        <div>Click here for details</div>
      </h2>
    </div>
  );
};

export default LogTile;
