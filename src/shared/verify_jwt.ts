import jwt from "jsonwebtoken";
import { envConfig } from "../config/env.config";
import { RequestHandler } from "express";
import ApiError from "../errors_handler/api_error";
import { StatusCodes } from "http-status-codes";
import { IUserPayload } from "../Interfaces/user.payload";

const verifyJWT: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized access!");
  }
  const user = jwt.verify(
    token,
    envConfig.jwt_secret as string
  ) as IUserPayload;
  req.user = user;
};

export default verifyJWT;
