import mongoose from "mongoose";
import { config } from "dotenv";
import debug from "debug";
import logger from '../helpers/logger'
config();
const DEBUG = debug("dev");

const { NODE_ENV, DB} = process.env;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(DB, options)
  .then(() => {
    logger.info("MongoDB is connected")
  })
  .catch((err) => {
    logger.error("MongoDB connection unsuccessful")
    DEBUG();
    // console.log(err);
  });
