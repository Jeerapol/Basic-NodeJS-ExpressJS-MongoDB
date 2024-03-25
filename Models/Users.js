const mongoose = require("mongoose");

const UsersScheme = mongoose.Schemas(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
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
