import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
  try {
    return async (req: Request, res: Response, next: NextFunction) => {
      return await fn(req, res, next);
    };
  } catch (error) {
    throw error;
  }
};
export default catchAsync;
