import mongoose from "mongoose";
import app from "./app";
import { envConfig } from "./config/env.config";

const boostrap = async () => {
  try {
    // connect database
    mongoose
      .connect(envConfig.db_remote as string)
      .then(() => console.log("Database connection successful!✔📝"))
      .catch((e) => {
        console.log(e);
      });

    app.listen(envConfig.port, () => {
      console.log(`Book app listening on port: ${envConfig.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

boostrap();
