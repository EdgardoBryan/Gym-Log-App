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

exercisesRouter.delete("/:id", async (req, res) => {
    try {
      const exercise = await Exercise.query().findById(req.params.id)
      if (req.user.id === exercise.userId) {
        await Exercise.query().deleteById(req.params.id)
        res.status(200).json({ message: "This exercise was successfully deleted" })
      } else {
        res.status(401).json({ message: "Error: Unauthorized delete request" })
      }
    } catch (error) {
      res.status(500).json({ errors: error })
    }
  })

export default exercisesRouter;
