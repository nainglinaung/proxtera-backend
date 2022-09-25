import StudentModel from "../models/student.model";
import {readFile} from "xlsx";
import {composeData} from "../repositories/student.repo";
export default {
  importDoc: async (req, res) => {
    let file = req.file;
    let workbook = await readFile(file.path);
    let {invalidRecords,cleanRecords,missingCount,cleanCount} = composeData(workbook)

    let result = await StudentModel.insertMany(cleanRecords,{ordered:false,populate:"Array"});
    return res.json({invalidRecords, missingCount, cleanCount});
       

  },

};
