"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, response) => {
    res.status(response.statusCode).send({
        success: response.success,
        message: response.message || undefined,
        data: response.data || undefined,
    });
};
exports.default = sendResponse;
