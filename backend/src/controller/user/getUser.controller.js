const User = require("../../model/User.schema");

const getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();
    if (!getUser) {
      res.status(400).json({ message: "no User found" });
    }
    res.status(200).json({ message: getUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const userByID = await User.findById(id);
    if (!userByID) {
      return res.status(404).json({ message: "No User found" });
    }
    res.status(200).json({ message: userByID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { getAllUser, getUserByID };
