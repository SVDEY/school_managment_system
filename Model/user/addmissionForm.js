const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const addmissionFormsSchema = new Schema({
  std_name: { type: String, max: 100, required: true },
  gender: { type: String, max: 100},
  religon: { type: String,default: null },
  lastname: { type: String,default: null },
  dob: { type: String, default: null },
  email: { type: String, max: 100, default: null },
  class_study: { type: String, default: null},
  roll: { type: String, max: 100, default: null },
  section: { type: String, default: null },
  add_no: { type: String, default: null },
  father_name: { type: String, default: null },
  add_no: { type: String, default: null },
  mobile: { type: String, default: null },
  mother_name: { type: String, default: null },
  nationality: { type: String, default: null },
  father_occup: { type: String, default: null },
  address:{ type: String, default:null },
  mother_occup: { type:String, default:null},
  permt_address: { type: String, default: null },
  filePath: { type: String, default: null },
  lastLogin: { type: Date, default: Date.now() },
  createdBy: { type: ObjectId, default: null },
  createdOn: { type: Date, default: Date.now() },
  createdByIp: { type: String, max: 30 },
  updatedBy: { type: ObjectId },
  updatedOn: { type: Date, default: null },
  updatedByIp: { type: String, max: 30 },
  status: { type: String, max: 2, default: "N" },
});

module.exports=mongoose.model("addmissionForm",addmissionFormsSchema)
