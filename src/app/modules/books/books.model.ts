import mongoose, { Types } from "mongoose";
import IBooks, { IBookModel } from "./books.interface";

const bookSchema = new mongoose.Schema<IBooks>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  reviews: {
    reviewer: String,
    review: Number,
  },
});
// static mathods
bookSchema.static("getBook", async function (bookId: Types.ObjectId) {
  return await Book.findOne({ _id: bookId });
});

const Book = mongoose.model<IBooks, IBookModel>("Book", bookSchema);

export default Book;
