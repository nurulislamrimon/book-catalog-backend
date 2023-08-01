"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const catch_async_1 = __importDefault(require("../../../shared/catch_async"));
const send_response_1 = __importDefault(require("../../../shared/send_response"));
const books_service_1 = require("./books.service");
const mongoose_1 = require("mongoose");
const books_model_1 = __importDefault(require("./books.model"));
const api_error_1 = __importDefault(require("../../../errors_handler/api_error"));
const http_status_codes_1 = require("http-status-codes");
const getBooksController = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.bookServices.getAllBooksService();
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All books",
        data: result,
    });
}));
const postABookController = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.bookServices.postABookService(req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "New Book added successfully!",
        data: result,
    });
}));
const getABookController = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = new mongoose_1.Types.ObjectId(req.params.id);
    const result = yield books_service_1.bookServices.getABookService(bookId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book is responsed!",
        data: result,
    });
}));
const updateABookController = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = new mongoose_1.Types.ObjectId(req.params.id);
    const isBookExist = yield books_model_1.default.getBook(bookId);
    if (!isBookExist) {
        throw new api_error_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Book doesn't exist!");
    }
    const result = yield books_service_1.bookServices.updateABookService(bookId, req.body);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book updated successfully!",
        data: result,
    });
}));
const deleteABookController = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = new mongoose_1.Types.ObjectId(req.params.id);
    const isBookExist = yield books_model_1.default.getBook(bookId);
    if (!isBookExist) {
        throw new api_error_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Book doesn't exist!");
    }
    const result = yield books_service_1.bookServices.deleteABookService(bookId);
    (0, send_response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book deleted successfully!",
        data: result,
    });
}));
exports.booksController = {
    getBooksController,
    postABookController,
    getABookController,
    updateABookController,
    deleteABookController,
};
