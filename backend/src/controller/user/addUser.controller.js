const User = require("../../model/User.schema");
const hashedPassword = require("../../helper/hashPassword");
const hashPassword = require("../../helper/hashPassword");

const addUser = async (req, res) => {
  const { name, email, password, PhoneNumber } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "all field are required" });
  }

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      res
        .status(400)
        .json({ message: "You cant't add a user with existing email" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addUser;
