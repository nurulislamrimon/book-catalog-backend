import express from "express";
import cors from "cors";
import { routes } from "./router/router";
const app = express();

// handle middlewares
app.use(cors());
app.use(express.json());

// all routes
app.use(routes);

export default app;
