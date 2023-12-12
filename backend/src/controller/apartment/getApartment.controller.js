const Apartement = require("../../model/apartment.schema");

const getAllApartement = async (req, res) => {
  try {
    const appartement = await Apartement.find();
    if (!appartement) {
      res.status(400).json({ message: "no apartement found" });
    }
    res.status(200).json({ message: appartement });
  } catch (error) {}
};
module.exports = getAllApartement;
