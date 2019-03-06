import mongoose from "../../common/mongoose";

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  /**
   *  Your Schema
   */
});

const DocumentModel = mongoose.model("Document", documentSchema);
export default DocumentModel;
