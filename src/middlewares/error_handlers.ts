import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 400;
  let errorMessages = {};

  res.status(statusCode).send({
    success: false,
    message: error.message,
    errorMessages,
  });
};
