"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookServices = void 0;
const books_model_1 = __importDefault(require("./books.model"));
const getAllBooksService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.default.find({}, "-reviews");
});
const postABookService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.default.create(payload);
});
const getABookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.default.findOne({ _id: id });
});
const updateABookService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.default.findOneAndUpdate({ _id: id }, { $set: payload }, { runValidators: true, new: true });
});
const deleteABookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.default.findOneAndDelete({ _id: id });
});
exports.bookServices = {
    getAllBooksService,
    postABookService,
    getABookService,
    updateABookService,
    deleteABookService,
};
