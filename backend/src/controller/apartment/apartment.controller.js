const Apartement = require("../../model/apartment.schema");

class ApartementController {
  static createApartement = async (req, res) => {
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
  static getApartement = async (req, res) => {
    console.log("waaaaaaayeh");
    try {
      const apartement = await Apartement.find();
      if (!apartement) {
        return res.status(404).json({ message: "No apartments found" });
      } else {
        return res.status(200).json({ message: apartement });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
module.exports = ApartementController;
