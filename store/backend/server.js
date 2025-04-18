import colors from "colors";
import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);
app.use(express.json());

const PORT = process.env.PORT || 5003;

server.listen(PORT, () =>
  console.log(
    `App running on port ${PORT} on ${process.env.NODE_ENV} mode`.bold.yellow
  )
);
