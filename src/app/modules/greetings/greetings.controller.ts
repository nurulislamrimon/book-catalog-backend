import { RequestHandler } from "express";

const greetings: RequestHandler = (req, res) => {
  res.send({ success: true, data: "Welcome to Book Catalog server!" });
};

export default greetings;
