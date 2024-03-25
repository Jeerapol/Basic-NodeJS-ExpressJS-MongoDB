const express = require("express");
const router = express.Router();
const { register } = require("../Controllers/auth");

router.post("/Register", register);

router.post("/Login", (req, res) => {
  res.send("Login !");
});

module.exports = router;
