import express from "express";
import { greetingsRouter } from "../app/modules/greetings/greetings.router";
import { bookRoutes } from "../app/modules/books/books.routes";

const router = express.Router();

const allRoutes = [
  { path: "/", element: greetingsRouter },
  { path: "/books", element: bookRoutes },
];

allRoutes.forEach((route) => router.use(route.path, route.element));

export const routes = router;
