"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.get("/", books_controller_1.booksController.getBooksController);
router.post("/", books_controller_1.booksController.postABookController);
router.get("/:id", books_controller_1.booksController.getABookController);
router.put("/:id", books_controller_1.booksController.updateABookController);
router.delete("/:id", books_controller_1.booksController.deleteABookController);
exports.bookRoutes = router;
