const uploadRouter = require("express").Router();
import uploadController from '../controllers/upload.controller'
import catchAsync from '../middleware/catchAsync';



let {upload} = uploadController;

uploadRouter.post('/',catchAsync(upload));



module.exports = uploadRouter