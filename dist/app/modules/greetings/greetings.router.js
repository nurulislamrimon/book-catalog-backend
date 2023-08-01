"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingsRouter = void 0;
const express_1 = __importDefault(require("express"));
const greetings_controller_1 = __importDefault(require("./greetings.controller"));
const router = express_1.default.Router();
router.get("/", greetings_controller_1.default);
exports.greetingsRouter = router;
