const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const adminSchema = new mongoose.Schema({
  id:Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  type: Number
});
adminSchema.plugin(AutoIncrement, {id: 'id_admin',inc_field: 'id', start_seq:'4'});

module.exports = Admin = mongoose.model("admin", adminSchema);
