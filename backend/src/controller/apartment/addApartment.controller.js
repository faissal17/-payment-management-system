const Apartement = require("../../model/apartment.schema");

const createApartement = async (req, res) => {
  const { name, description, price, city, adress, room, floor } = req.body;
  try {
    const appartement = await Apartement.create({
      name,
      description,
      price,
      city,
      adress,
      room,
      floor,
    });
    res
      .status(201)
      .json({ status: "succes", message: "Apartment created", appartement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createApartement;
