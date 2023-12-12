const Apartement = require("../../model/apartment.schema");

const deleteApartment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedApartement = await Apartement.findByIdAndDelete(id);
    if (!deletedApartement) {
      return res.status(404).json({ message: "No apartment found" });
    }
    res.status(200).json({ message: "apartement deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteApartment;
