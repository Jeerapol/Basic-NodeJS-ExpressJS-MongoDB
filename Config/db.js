const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Server-Test-NodeExpress");
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error); // Log error details
  }
};

module.exports = connectDB;
