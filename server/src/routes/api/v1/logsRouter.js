import Express from "express";
import Log from "../../../models/Log.js";
import { ValidationError } from "objection";
import cleanUserInput from "../../../services/cleanUserInput.js";
import logExerciseRouter from "./logExerciseRouter.js";
import Exercise from "../../../models/Exercise.js";
import User from "../../../models/User.js";

const logsRouter = new Express.Router();

logsRouter.get("/", async (req, res) => {
  try {
    // const logs = await Log.query().where({ userId: req.user.id });
    // ^^
    // const user = await User.query().findById(req.user.id)
    // const logs = await user.$relatedQuery("logs")
    
    // first rollback / drop DB
    // then add the `userId` column to Logs table

    // look into the authenticated routes in React
    // handle to ensure a user is logged in
    // and on a log index/show page make sure the 

    const logs = await Log.query();
    res.status(200).json({ logs: logs });
  } catch (error) {
    res.status(500).json({ error });
  }
});

logsRouter.post("/", async (req, res) => {
  const body = cleanUserInput(req.body)
  try {
    const newLog = await Log.query().insertAndFetch(body);
    res.status(201).json({ newLog: newLog });
  } catch (error) {
    {
      if (error instanceof ValidationError)
      res.status(422).json({ errors: error.data });
    }
    res.status(500).json({ errors: error });
  }
});

logsRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const log = await Log.query().findById(id)
    log.exercises = await log.$relatedQuery("exercises")
    console.log(log)
    // log.exercises = await Exercise.query().where({logId: id})
    
    res.status(200).json({ log: log })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
})

logsRouter.use("/:logId/exercises", logExerciseRouter)

export default logsRouter

