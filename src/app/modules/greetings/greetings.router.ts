import express from "express";
import greetings from "./greetings.controller";

const router = express.Router();

router.get("/", greetings);

export const greetingsRouter = router;
