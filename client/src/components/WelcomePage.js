import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
    
    
    return (
        <div>
          <div className="link">WELCOME TO MY PERSONAL GYM JOURNAL</div>  
          <div className="link"><Link to={"/new-log"}>Click Here To Create New Log</Link></div>
          <div className="link"><Link to={"/logs"}>Click Here View List of all Logs</Link></div> 
        </div>
    )
}

export default WelcomePage