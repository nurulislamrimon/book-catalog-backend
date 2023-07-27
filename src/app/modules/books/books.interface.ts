import { Model, Types } from "mongoose";

interface IReviews {
  reviewer: string;
  review: number;
}

interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  reviews?: IReviews;
}

export interface IBookModel extends Model<IBooks> {
  getBook(id: Types.ObjectId): Promise<IBooks>;
}

export default IBooks;
