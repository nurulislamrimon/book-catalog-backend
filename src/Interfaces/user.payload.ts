import { Types } from "mongoose";

export interface IUserPayload {
  userId: Types.ObjectId;
  role: string;
}
