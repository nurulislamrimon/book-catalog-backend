import IBooks from "./books.interface";
import Book from "./books.model";

const getBooksService = async () => {
  return await Book.find({});
};
const postABookService = async (payload: IBooks) => {
  return await Book.create(payload);
};

export const bookServices = { getBooksService, postABookService };
