const Users = require("../Models/Users");
const bcrypt = require("bcryptjs");
const { resolveMx } = require("dns");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    // 1. Check User
    const { name, password } = req.body; // Destructuring

    var user = await Users.findOne({ name });

    if (user) {
      return res.status(400).send("User already Exists!!");
    }
    // 2. Encrypt
    const salt = await bcrypt.genSalt(10);
    user = new Users({
      name,
      password,
    });

    user.password = await bcrypt.hash(password, salt);
    // 3. Save
    await user.save();
    res.send(`Register Successfully!`);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server error: ${error}`);
  }
};

exports.login = async (req, res) => {
  try {
    // 1. Check User
    const { name, password } = req.body;
    var user = await Users.findOneAndUpdate({ name }, { new: true });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Password mismatch");
      }

      // 2. Payload
      var Payload = {
        user: {
          name: user.name,
        },
      };
      // 3. Generate Token
      jwt.sign(
        Payload,
        process.env.JWT_TOKEN_KEY,
        { expiresIn: 20 },
        (error, token) => {
          if (error) throw error;
          res.json({ token, Payload });
        }
      );
    } else {
      return res.status(400).send("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server error: ${error}`);
  }
};
