"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const greetings_router_1 = require("../app/modules/greetings/greetings.router");
const books_routes_1 = require("../app/modules/books/books.routes");
const router = express_1.default.Router();
const allRoutes = [
    { path: "/", element: greetings_router_1.greetingsRouter },
    { path: "/books", element: books_routes_1.bookRoutes },
];
allRoutes.forEach((route) => router.use(route.path, route.element));
exports.routes = router;
