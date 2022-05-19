import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import logsRouter from "./api/v1/logsRouter.js";
import exercisesRouter from "./api/v1/ExercisesRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here
rootRouter.use("/api/v1/logs", logsRouter)
rootRouter.use("/api/v1/exercises", exercisesRouter)

export default rootRouter;
