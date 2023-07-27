import { ErrorRequestHandler, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { handleValidationError } from "../errors_modifier/handle_validation_error";

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 400;
  let message = error.message;
  let errorMessages = [{ path: "", message: "" }];
  if (error.name === "ValidationError") {
    const validationError = handleValidationError(error);
    statusCode = validationError.statusCode;
    errorMessages = validationError.errorMessages;
    message = validationError.message;
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
