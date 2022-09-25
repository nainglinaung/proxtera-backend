const Router = require("express").Router();

import studentRouter from "./student.route";



Router.use("/student",studentRouter);



export default Router;
