"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(statusCode, message) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = ApiError;
