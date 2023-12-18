const Payment = require("../../model/payment.schema");
const User = require("../../model/User.schema");
const Apartement = require("../../model/apartment.schema");

const addPayment = async (req, res) => {
  const { amount, user, apartment } = req.body;
  try {
    const userId = await User.findById(user);
    const apartmentId = await Apartement.findById(apartment);
    const payment = await Payment.create({
      amount,
      user: userId,
      apartment: apartmentId,
    });

    res.status(201).json({ message: "Payment created", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addPayment;
