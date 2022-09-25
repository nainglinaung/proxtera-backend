const studentRouter = require("express").Router();
import studentController from '../controllers/student.controller'
import catchAsync from '../middleware/catchAsync';
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


let {importDoc} = studentController;

studentRouter.post('/',upload.single("spreadsheet"),catchAsync(importDoc));



module.exports = studentRouter