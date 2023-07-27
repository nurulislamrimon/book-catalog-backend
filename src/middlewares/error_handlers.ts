import { ErrorRequestHandler, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { handleValidationError } from "../errors_handler/handle_validation_error";
import ApiError from "../errors_handler/api_error";

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 400;
  let message;
  let errorMessages = [{ path: "", message: "" }];
  if (error.name === "ValidationError") {
    const validationError = handleValidationError(error);
    statusCode = validationError.statusCode;
    errorMessages = validationError.errorMessages;
    message = validationError.message;
  } else if (error.name === "BSONError") {
    message = "Invalid id!";
    errorMessages[0].message = error.message;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  res.status(statusCode).send({
    success: false,
    message,
    errorMessages,
  });
};

export const notFoundRouteErrorHandler: RequestHandler = (req, res, next) => {
  let errorMessages = [
    { path: req.originalUrl, message: "Route doesn't exist!" },
  ];
  res.status(StatusCodes.NOT_FOUND).send({
    success: false,
    message: "Route not found!",
    errorMessages,
  });
};
