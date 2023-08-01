import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const envConfig = {
  jwt_secret: process.env.jwt_secret,
  port: process.env.port,
  db_local: process.env.db_local,
  db_remote: process.env.db_remote,
};
