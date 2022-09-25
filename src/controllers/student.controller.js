import StudentModel from "../models/student.model";
import {readFile,utils} from "xlsx";

export default {
  importDoc: async (req, res) => {
    let file = req.file;
    let workbook = await readFile(file.path);
    var sheets = workbook.SheetNames;
    let InvalidRecords = []
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
              missingRecords.push(record);
            }
        }
       
        let result = await StudentModel.insertMany(cleanRecords,{ordered:false,populate:"Array"});
        return res.json({missingRecords, missingCount:missingRecords.length, cleanCount:cleanRecords.length});
       
      } catch(error) {
        console.error(error);
      }
    }


    // let category = new StudentModel(req.body);
    // let result = await category.save();
    // let rows = await readXlsxFile(file.path,{schema});
    return res.json({ "hello":"world"});
  },

};
