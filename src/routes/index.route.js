const Router = require("express").Router();

import studentRouter from "./student.route";



Router.use("/upload",studentRouter);



export default Router;
