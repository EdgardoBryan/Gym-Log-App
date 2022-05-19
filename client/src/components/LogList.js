import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogTile from "./LogTile";

const LogList = (props) => {
  const [logs, setLogs] = useState([]);

  const getLogs = async () => {
    try {
      const response = await fetch("/api/v1/logs");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setLogs(responseBody.logs);
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getLogs();
  }, []);

  
  const logListItems = logs.map((logs) => {
    return <LogTile key={logs.id} log={logs} id={logs.id} />;
  });

  return (
    <div>
      <Link to={"/new-log"}>Click Here for New Log Page Fool!</Link>
      <h1 className="header">My Fitness Logs!</h1>
      <h3 className="header">Here You Can Click on Past Workout Logs</h3>
      {logListItems}
    </div>
  );
};

export default LogList;
