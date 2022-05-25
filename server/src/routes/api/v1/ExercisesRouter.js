import Express from "express";
import Exercise from "../../../models/Exercise.js";

const exercisesRouter = new Express.Router();

exercisesRouter.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.query();
    res.status(200).json({ exercises: exercises });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default exercisesRouter;
