import Express from "express";
import { ValidationError } from "objection";
import  Exercise  from "../../../models/Exercise.js";
import cleanUserInput from "../../../services/cleanUserInput.js";

const logExerciseRouter = Express.Router({ mergeParams: true });

logExerciseRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const {name,sets,reps,notes } = formInput
  try {
    const newExercise = await Exercise.query().insertAndFetch({name,sets,reps,notes, logId: req.params.logId, userId: req.user.id })
    res.status(201).json({ exercise: newExercise });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data });
    } else {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
})

export default logExerciseRouter;
