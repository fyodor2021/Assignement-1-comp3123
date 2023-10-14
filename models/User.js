const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    maxlength: 50,
  },
});
module.exports = mongoose.model("user", userSchema);
