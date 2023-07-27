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

export default IBooks;
