const User = require("../../model/User.schema");

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const { id } = req.params;

    const updateFields = {
      name,
      email,
      password,
    };

    const findUser = await User.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!findUser) {
      return res.status(404).json({ message: "No User found" });
    }

    return res
      .status(200)
      .json({ message: "User updated", findUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updateUser;
