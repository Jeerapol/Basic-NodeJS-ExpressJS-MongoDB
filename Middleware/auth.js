require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Token Invalid");
  }
};
