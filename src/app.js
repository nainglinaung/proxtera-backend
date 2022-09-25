import express from "express";
import logger from "morgan";
import { config } from "dotenv";


import errorHandler from "./middleware/errorHandler";
import { NotFoundError } from "./helpers/errors";
import Router from "./routes/index.route";

import path from 'path'
const app = express();
const http = require('http').Server(app);

config()




if (["development", "production"].includes(process.env.NODE_ENV)) {
  app.use(logger("dev"));
}




app.use(express.json({limit:"200mb"}));
app.use(express.urlencoded({ extended: true,limit:"50mb"}));
app.use(errorHandler);

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.use('/', Router);






app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "For Proxtera",
  });
});

app.all("*", (req, res) => {
  console.log(req.url)
  throw new NotFoundError('Resource not found on this server')
});


if (process.env.PORT == 6000) {
 
  kue.app.listen(8000);
  console.log("running kue queue");
  
}


export default app;
