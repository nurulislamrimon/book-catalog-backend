"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRouteErrorHandler = exports.globalErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const handle_validation_error_1 = require("../errors_handler/handle_validation_error");
const api_error_1 = __importDefault(require("../errors_handler/api_error"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 400;
    let message = error.message;
    let errorMessages = [{ path: "", message: "" }];
    if (error.name === "ValidationError") {
        const validationError = (0, handle_validation_error_1.handleValidationError)(error);
        statusCode = validationError.statusCode;
        errorMessages = validationError.errorMessages;
        message = validationError.message;
    }
    else if (error.name === "BSONError") {
        message = "Invalid id!";
        errorMessages[0].message = error.message;
    }
    else if (error instanceof api_error_1.default) {
        statusCode = error.statusCode;
    }
    res.status(statusCode).send({
        success: false,
        message,
        errorMessages,
    });
};
exports.globalErrorHandler = globalErrorHandler;
const notFoundRouteErrorHandler = (req, res, next) => {
    let errorMessages = [
        { path: req.originalUrl, message: "Route doesn't exist!" },
    ];
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
        success: false,
        message: "Route not found!",
        errorMessages,
    });
};
exports.notFoundRouteErrorHandler = notFoundRouteErrorHandler;
