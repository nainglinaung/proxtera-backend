import StudentModel from "../models/student.model";

export default {
  upload: async (req, res) => {
    let category = new StudentModel(req.body);
    let result = await category.save();
    return res.json({ result });
  },

};
