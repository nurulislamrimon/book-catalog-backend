import { RequestHandler } from "express";
import catchAsync from "../../../shared/catch_async";
import sendResponse from "../../../shared/send_response";
import IBooks from "./books.interface";
import { bookServices } from "./books.service";
import { Types } from "mongoose";
import Book from "./books.model";
import ApiError from "../../../errors_handler/api_error";
import { StatusCodes } from "http-status-codes";

const getBooksController: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBooksService();
  sendResponse<IBooks[]>(res, {
    statusCode: 200,
    success: true,
    message: "All books",
    data: result,
  });
});

const postABookController: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.postABookService(req.body);
  sendResponse<IBooks>(res, {
    statusCode: 200,
    success: true,
    message: "New Book added successfully!",
    data: result,
  });
});

const getABookController: RequestHandler = catchAsync(async (req, res) => {
  const bookId = new Types.ObjectId(req.params.id);
  const result = await bookServices.getABookService(bookId);
  sendResponse<IBooks>(res, {
    statusCode: 200,
    success: true,
    message: "Book is responsed!",
    data: result,
  });
});

const updateABookController: RequestHandler = catchAsync(async (req, res) => {
  const bookId = new Types.ObjectId(req.params.id);
  const isBookExist = await Book.getBook(bookId);

  if (!isBookExist) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Book doesn't exist!");
  }
  const result = await bookServices.updateABookService(bookId, req.body);
  sendResponse<IBooks>(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully!",
    data: result,
  });
});

const deleteABookController: RequestHandler = catchAsync(async (req, res) => {
  const bookId = new Types.ObjectId(req.params.id);
  const isBookExist = await Book.getBook(bookId);

  if (!isBookExist) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Book doesn't exist!");
  }
  const result = await bookServices.deleteABookService(bookId);
  sendResponse<IBooks>(res, {
    statusCode: 200,
    success: true,
    message: "Book deleted successfully!",
    data: result,
  });
});

export const booksController = {
  getBooksController,
  postABookController,
  getABookController,
  updateABookController,
  deleteABookController,
};
