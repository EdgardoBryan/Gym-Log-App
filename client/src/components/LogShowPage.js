import React,{ useState,useEffect } from "react"
import ExerciseTile from "./ExerciseTile"



const LogShowPage = (props)=>{
    const [log, setLog] = useState({
        date:"",
        weight:""
    })

    const fetchLog = async () => {
        try {
            
         const logId = props.match.params.id
          const response = await fetch(`/api/v1/logs/${logId}`)
          if (!response.ok) {
            const error = new Error(`${response.status} (${response.statusText})`)
            throw error
          }
          const responseBody = await response.json()
          
          setLog(responseBody.log)
        } catch (error) {
          console.log(`Error in fetch: ${error.message}`)
        }
      }
    
      useEffect(() => {
        fetchLog()
      }, [])

        const [exercises, setExercises] = useState([]);

        const getExercises = async () => {
          try {
            const response = await fetch("/api/v1/exercises");
            if (!response.ok) {
              const errorMessage = `${response.status} (${response.statusText})`;
              const error = new Error(errorMessage);
              throw error;
            }
            const responseBody = await response.json();
            setExercises(responseBody.exercises);
          } catch (error) {
            console.log(`Error in fetch: ${error.message}`);
          }
        };
        useEffect(() => {
          getExercises();
        }, []);

        const exercisesTiles = exercises.map(exercises=>{
            return (
                <ExerciseTile key={exercises.id} 
                name={exercises.name}
                sets={exercises.sets}
                reps={exercises.reps}
                notes={exercises.notes}
                />
            )
        })
    return (
        <div>
            <h1 className="Log-Details tile-show-page">Here is the workout for 
            <div>Date:{log.date}</div> 
            <div>Weight for this day:</div>
            {log.weight}lbs
            </h1>
            {exercisesTiles} 
        </div>
    )
}

export default LogShowPage