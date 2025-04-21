import colors from "colors";
import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";

import connectDB from "./config/db.config.js";
import globalErrorHandlers from "./contollers/error.controller.js";
import AppError from "./utils/app.error.js";

dotenv.config();

connectDB();

const app = express();
const server = createServer(app);
app.use(express.json());

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandlers);

const PORT = process.env.PORT || 5003;

server.listen(PORT, () =>
  console.log(
    `App running on port ${PORT} on ${process.env.NODE_ENV} mode`.bold.yellow
  )
);
