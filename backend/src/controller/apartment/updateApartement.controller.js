const Apartment = require("../../model/apartment.schema");

const updateApartement = async (req, res) => {
  const { name, description, price, city, adress, room, floor } = req.body;
  try {
    const { id } = req.params;

    const updateFields = {
      name,
      description,
      price,
      city,
      adress,
      room,
      floor,
    };

    const findApartment = await Apartment.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!findApartment) {
      return res.status(404).json({ message: "No apartment found" });
    }

    return res
      .status(200)
      .json({ message: "Apartment updated", findApartment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updateApartement;
