const express = require("express");
const router = express.Router();
const { register, login } = require("../Controllers/auth");

router.post("/Register", register);

router.post("/Login", login);

module.exports = router;
