import mongoose from "mongoose";

export const handleValidationError = (
  error: mongoose.Error.ValidationError
) => {
  const errors = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return { path: el.path, message: el.message };
    }
  );
  return {
    statusCode: 400,
    message: "Validation Error!",
    errorMessages: errors,
  };
};
