import express from "express";
import { greetingsRouter } from "../app/modules/greetings/greetings.router";

const router = express.Router();

const allRoutes = [{ path: "/", element: greetingsRouter }];

allRoutes.forEach((route) => router.use(route.path, route.element));

export const routes = router;
