import { RequestHandler } from "express";
import catchAsync from "../../../shared/catch_async";
import sendResponse from "../../../shared/send_response";
import IBooks from "./books.interface";
import { bookServices } from "./books.service";

const getBooksController: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.getBooksService();
  sendResponse<IBooks[]>(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const postABookController: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.postABookService(req.body);
  sendResponse<IBooks>(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

export const booksController = { getBooksController, postABookController };
