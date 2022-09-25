import UploadModel from "../models/upload.model";

export default {
  upload: async (req, res) => {
    let category = new UploadModel(req.body);
    let result = await category.save();
    return res.json({ result });
  },

};
