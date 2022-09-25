const studentRouter = require("express").Router();
import studentController from '../controller/student.controller'
import catchAsync from '../middleware/catchAsync';



let {upload} = studentController;

studentRouter.post('/',catchAsync(upload));



module.exports = studentRouter