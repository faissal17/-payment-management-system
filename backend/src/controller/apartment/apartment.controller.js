const Apartement = require("../../model/apartment.schema");

class ApartementController {
  static create = async (req, res) => {
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
      res.status(201).json({ message: "appartement created", appartement });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
module.exports = ApartementController;
