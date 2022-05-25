import React, { useState } from "react";
import { Link } from "react-router-dom";
import translateServerErrors from "../services/translateServerErrors";
import ErrorList from "./layout/ErrorList";
import { Redirect } from "react-router-dom";

const LogForm = (props) => {
 const [newLog,setNewLog] = useState({
     date:"",
     weight:""
    })

  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
 
 const handleChange = (event) => {
  setNewLog({
    ...newLog,
    [event.currentTarget.name]: event.currentTarget.value,
  })
}

const clearForm = () => {
  setNewLog({
    date: "",
    weight: ""
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  postLogForm(newLog)
  clearForm()
}

const postLogForm = async () => {
  try {
    const response = await fetch("/api/v1/logs", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newLog)
    })
    if (!response.ok) {
      if(response.status === 422) {
        const body = await response.json()
        const newErrors = translateServerErrors(body.errors)
        return setErrors(newErrors)
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
    }else{
      setShouldRedirect(true)
    }
  } catch(err) {
    console.error(`Error in fetch: ${err.message}`)
  }
}
if (shouldRedirect) {
  return <Redirect push to="/logs" />
}

    return (
    <div>
      <form onSubmit={handleSubmit} className="log-form">
      <Link to={"/logs"} className="log-form-home"> CLICK FOR LIST OF LOGS</Link>
        <h5>New Daily Log</h5> 
        <ErrorList errors={errors} />
        <label htmlFor="date" className="date" >
          Add Date Here
          <input  type="text" name="date" onChange={handleChange} value={newLog.date} />
        </label>
        <label htmlFor="weight" className="weight">
          Add Weight in Pounds
          <input  type="text" name="weight"  onChange={handleChange} value={newLog.weight}/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default LogForm
