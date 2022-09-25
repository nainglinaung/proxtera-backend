const studentRouter = require("express").Router();
import studentController from '../controllers/student.controller'
import catchAsync from '../middleware/catchAsync';



let {upload} = studentController;

studentRouter.post('/',catchAsync(upload));



module.exports = studentRouter