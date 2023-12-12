const Apartement = require("../../model/apartment.schema");

const getAllApartement = async (req, res) => {
  try {
    const appartement = await Apartement.find();
    if (!appartement) {
      res.status(400).json({ message: "no apartement found" });
    }
    res.status(200).json({ message: appartement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getApartmentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const apartementByID = await Apartement.findById(id);
    if (!apartementByID) {
      return res.status(404).json({ message: "No apartment found" });
    }
    res.status(200).json({ message: apartementByID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllApartement, getApartmentByID };
