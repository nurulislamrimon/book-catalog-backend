import express from "express";
import { booksController } from "./books.controller";

const router = express.Router();

router.get("/", booksController.getBooksController);
router.post("/", booksController.postABookController);

export const bookRoutes = router;
