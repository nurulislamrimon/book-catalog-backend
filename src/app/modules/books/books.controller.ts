import { RequestHandler } from "express";
import catchAsync from "../../../shared/catch_async";
import sendResponse from "../../../shared/send_response";
import IBooks from "./books.interface";

const getBooksController: RequestHandler = catchAsync((req, res) => {
  sendResponse<IBooks[]>(res, {
    statusCode: 200,
    success: true,
  });
});

export const booksController = { getBooksController };
