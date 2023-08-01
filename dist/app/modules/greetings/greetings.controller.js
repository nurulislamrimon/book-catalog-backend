"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings = (req, res) => {
    res.send({ success: true, data: "Welcome to Book Catalog server!" });
};
exports.default = greetings;
