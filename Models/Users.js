const mongoose = require("mongoose");

const UsersScheme = mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestemps: true }
);

module.exports = mongoose.model("Users", UsersScheme);
