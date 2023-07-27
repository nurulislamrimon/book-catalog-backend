import express from "express";
import { booksController } from "./books.controller";

const router = express.Router();

router.get("/", booksController.getBooksController);

export const bookRoutes = router;
