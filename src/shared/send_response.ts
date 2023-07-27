import { Response } from "express";

interface IGenericResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
}

const sendResponse = <T>(res: Response, response: IGenericResponse<T>) => {
  res.status(response.statusCode).send({
    success: response.success,
    message: response.message || undefined,
    data: response.data || undefined,
  });
};

export default sendResponse;
