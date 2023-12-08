const User = require("../model/User.schema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = require("../helper/hashPassword");
const dotenv = require("dotenv");

dotenv.config();

class authController {
  static register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }
    try {
      const checkUserEmail = await User.findOne({ email });
      if (checkUserEmail) {
        return res
          .status(400)
          .json({ status: "error", message: "This email already exists" });
      }
      const hashedPassword = await hashPassword(password);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      const token = jwt.sign(
        { userRole: user.role, email: user.email, name: user.name },
        process.env.SECRET_KEY,
        {
          expiresIn: 6000,
        }
      );
      res.status(201).json({ message: "User created", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "email or password are not allowed to be empty",
      });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          status: "error",
          message: "No user found with this email.",
        });
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);
      if (passwordMatch) {
        return res.status(200).json({
          status: "succes",
          message: "Login successful",
        });
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "Incorrect password." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "server error" });
    }
  };
}

module.exports = authController;
