import mongoose from "mongoose";
import app from "./app";
import { envConfig } from "./config/env.config";

const boostrap = async () => {
  try {
    // connect database
    mongoose
      .connect("mongodb://127.0.0.1:27017/book-catalog")
      .then(() => console.log("Database connection successful!✔📝"))
      .catch((e) => {
        throw e;
      });

    app.listen(envConfig.port, () => {
      console.log(`Book app listening on port: ${envConfig.port}`);
    });
  } catch (error) {
    throw error;
  }
};

boostrap();
