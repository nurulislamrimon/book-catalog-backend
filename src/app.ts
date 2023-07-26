import express from "express";
import cors from "cors";
import { routes } from "./router/router";
import {
  globalErrorHandler,
  notFoundRouteErrorHandler,
} from "./middlewares/error_handlers";
const app = express();

// handle middlewares
app.use(cors());
app.use(express.json());

// all routes
app.use(routes);

// error handler
app.use(globalErrorHandler);
app.use(notFoundRouteErrorHandler);

export default app;
