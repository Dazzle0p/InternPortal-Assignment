const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
    required: true,
  },
  donations: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
