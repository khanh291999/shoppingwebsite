const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  id:Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  address: {type:String},
  phoneNumber: {type:String}
});
userSchema.plugin(AutoIncrement, {id: 'id_user',inc_field: 'id', start_seq:'5'});
module.exports = User = mongoose.model("user", userSchema);
