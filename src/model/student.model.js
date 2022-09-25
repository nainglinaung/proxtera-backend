import mongoose, { Schema } from "mongoose";
import { config } from "dotenv";

config();



const UploadSchema = new Schema({
  activity_id: {type:Array}, // could be activity/LTG/STG id 

},{timestamps : true});


const NoteModel = mongoose.model("upload", UploadSchema);

export default NoteModel;
