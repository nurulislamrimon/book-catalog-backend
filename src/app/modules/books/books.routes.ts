import express from "express";
import { booksController } from "./books.controller";

const router = express.Router();

router.get("/", booksController.getBooksController);
router.post("/", booksController.postABookController);
router.get("/:id", booksController.getABookController);
router.put("/:id", booksController.updateABookController);
router.delete("/:id", booksController.deleteABookController);

export const bookRoutes = router;
