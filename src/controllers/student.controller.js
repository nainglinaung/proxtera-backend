import StudentModel from "../models/student.model";
import {readFile,utils} from "xlsx";

export default {
  importDoc: async (req, res) => {
    let file = req.file;
    let workbook = await readFile(file.path);
    let sheets = workbook.SheetNames;
    let cleanCount = 0; 
    let invalidRecords = []
    for (let sheet of sheets) {
      let sheetData = workbook.Sheets[sheet];
      let output  = utils.sheet_to_json(sheetData);
      try {
        
        let cleanRecords = [];
        let missingRecords = [];

        for (let record of output) {
            if (record.Username && record.University && record.Email) {
              cleanRecords.push(record);
            } else {
              invalidRecords.push(record);
            }
        }
       
        cleanCount += cleanRecords.length;
        let result = await StudentModel.insertMany(cleanRecords,{ordered:false,populate:"Array"});
     } catch(error) {
        console.error(error);
        return res.status(400).json({status:"Error Happened"})
      }
    }

    return res.json({invalidRecords, missingCount:invalidRecords.length, cleanCount});
       

  },

};
