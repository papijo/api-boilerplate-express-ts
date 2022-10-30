import dotenv from "dotenv";
dotenv.config();

const PORT: string = process.env.PORT;
const NODE_ENV: string = process.env.NODE_ENV;
const API_AUTH: string = process.env.API_AUTH;

export default {
  PORT,
  NODE_ENV,
  API_AUTH,
};
