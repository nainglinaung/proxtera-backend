import StudentModel from "../models/student.model";

export default {
  importDoc: async (req, res) => {
    let file = req.file;
    // let category = new StudentModel(req.body);
    // let result = await category.save();
    return res.json({ file });
  },

};
