import React,{ useEffect, useState } from "react";
import LogTile from "./LogTile";

const LogList = (props)=>{
    
    const [logs,setLogs]= useState([])

   const getLogs = async () => {
    try{
        const response = await fetch ("/api/v1/logs")
        if(!response.ok){
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
        }
        const responseBody = await response.json()
        setLogs(responseBody.logs)
    }catch(error){
    console.log(`Error in fetch: ${error.message}`)
   } 
}

useEffect(()=>{
    getLogs()
},[])

    const logListItems = logs.map((logs)=>{
        return <LogTile key={logs.id} log={logs}/>
      })
    
    return (
        <div>
            <h1>Hello Logs List</h1>
            {logListItems}
        </div>
    )

}

export default LogList