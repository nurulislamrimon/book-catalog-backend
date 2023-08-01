"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router/router");
const error_handlers_1 = require("./middlewares/error_handlers");
const app = (0, express_1.default)();
// handle middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// all routes
app.use(router_1.routes);
// error handler
app.use(error_handlers_1.globalErrorHandler);
app.use(error_handlers_1.notFoundRouteErrorHandler);
exports.default = app;
