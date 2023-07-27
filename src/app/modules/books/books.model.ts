import mongoose from "mongoose";
import IBooks from "./books.interface";

const bookSchema = new mongoose.Schema<IBooks>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  reviews: {
    reviewer: { type: String, required: true },
    review: { type: Number, required: true },
  },
});

const Book = mongoose.model<IBooks>("Book", bookSchema);

export default Book;
