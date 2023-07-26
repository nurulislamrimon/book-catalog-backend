import { ErrorRequestHandler, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 400;
  let errorMessages = [{ path: "", message: "" }];

  res.status(statusCode).send({
    success: false,
    message: error.message,
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
