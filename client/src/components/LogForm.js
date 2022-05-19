import React, { useState } from "react";
import LogTile from "./LogTile";

const LogForm = (props) => {
 const [newLog,setNewLog] = useState({
     date:"",
     weight:""
 })

 
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
 const postLogForm = async (newLog) => {
  try {
    const response = await fetch("/api/v1/logs", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newLog),
    })
    if (!response.ok) {
      if (response.status === 422) {
        const body = await response.json()
        const newErrors = translateServerErrors(body.errors)
        return setErrors(newErrors)
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
    } else {
      setShouldRedirect(true)
    }
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`)
  }
}

    return (
    <div>
      <form onSubmit={handleSubmit}>
        Add New Log Here!!
        <label htmlFor="date" >
          date
          <input  type="text" name="date" onChange={handleChange} value={newLog.date} />
        </label>
        <label htmlFor="weight">
          weight
          <input  type="text" name="weight"  onChange={handleChange} value={newLog.weight}/>
        </label>
        <input type="submit"/>
      </form>
      <div>{logListItems}</div>
    </div>
  );
};

export default LogForm
