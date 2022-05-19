import { Exercise } from "./../../models/index.js";

class ExerciseSeeder { 
    static async seed(){

    
        const exerciseData = [
            {
                name:"Bicep Curls",
                sets: "3",
                reps: "15",
                logId: 1,
                userId: 1
            },
            {
                name:"DeadLift",
                sets: "4",
                reps:"8",
                logId: 1,
                userId: 1
            },
            {
                name:"Bench Press",
                sets:"5",
                reps:"12",
                logId: 1,
                userId: 1
            },
            {
                name:"Barbell Squats",
                sets: "3",
                reps: "15",
                logId: 1,
                userId: 1
            },
            {
                name:"Lunges",
                sets: "4",
                reps:"8",
                logId: 1,
                userId: 1
            },
            {
                name:"Leg Press",
                sets:"5",
                reps:"12",
                logId: 1,
                userId: 1

            },
            {
                name:"Barbell Row",
                sets: "3",
                reps: "15",
                logId: 1,
                userId: 1
            },
            {
                name:"Lat PullDown",
                sets: "4",
                reps:"8",
                logId: 1,
                userId: 1
            },
            {
                name:"T-Bar Row",
                sets:"5",
                reps:"12",
                logId: 1,
                userId: 1

            },
            {
                name:"Cable Crunches",
                sets: "3",
                reps: "15",
                logId: 1,
                userId: 1
            },
            {
                name:"Sit Ups",
                sets: "4",
                reps:"8",
                logId: 1,
                userId: 1
            },
            {
                name:"Ab Holds",
                sets:"5",
                reps:"12",
                logId: 1,
                userId: 1
            }
        ]

        for(const singleExerciseData of exerciseData){
            const currentExercise = await Exercise.query().insert(singleExerciseData)
            if(!currentExercise){
                await Exercise.query().insert(singleExerciseData)
            }
        }
    }
} 

export default ExerciseSeeder