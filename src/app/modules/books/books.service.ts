import { Types } from "mongoose";
import IBooks from "./books.interface";
import Book from "./books.model";

const getAllBooksService = async () => {
  return await Book.find({}, "-reviews");
};

const postABookService = async (payload: IBooks) => {
  return await Book.create(payload);
};

const getABookService = async (id: Types.ObjectId) => {
  return await Book.findOne({ _id: id });
};

const updateABookService = async (id: Types.ObjectId, payload: IBooks) => {
  return await Book.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { runValidators: true, new: true }
  );
};

const deleteABookService = async (id: Types.ObjectId) => {
  return await Book.findOneAndDelete({ _id: id });
};

export const bookServices = {
  getAllBooksService,
  postABookService,
  getABookService,
  updateABookService,
  deleteABookService,
};
