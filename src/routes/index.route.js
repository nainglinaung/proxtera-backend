const Router = require("express").Router();

import uploadRouter from "./upload.route";



Router.use("/upload",uploadRouter);



export default Router;
