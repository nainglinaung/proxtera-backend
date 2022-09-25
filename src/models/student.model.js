import mongoose, { Schema } from "mongoose";
import { config } from "dotenv";

config();



const StudentSchema = new Schema({
  Username:   {type:String, required:true}, // could be activity/LTG/STG id 
  University: {type:String, required:true}, // could be activity/LTG/STG id 
  Email:      {type:String, required:true}, // could be activity/LTG/STG id 

},{timestamps : true});


const NoteModel = mongoose.model("student", StudentSchema);

export default NoteModel;
