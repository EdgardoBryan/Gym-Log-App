import Express from "express";
import Log from "../../../models/Log.js";
import { ValidationError } from "objection";
import cleanUserInput from "../../../services/cleanUserInput.js";
import LogSerializer from "../../../serializers/LogSerializer.js";

const logsRouter = new Express.Router();

logsRouter.get("/", async (req, res) => {
  try {
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
    res.status(200).json({ log: log })
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default logsRouter

//const serializedLaunchers = launchers.map(launcher => LauncherSerializer.getSummary(launcher))
