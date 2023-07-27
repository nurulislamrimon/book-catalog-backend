class ApiError {
  message;
  statusCode;
  constructor(statusCode: number, message: string) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default ApiError;
