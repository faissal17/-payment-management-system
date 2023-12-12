const Payment = require("../../model/payment.schema");

const addPayment = async (req, res) => {
  const { amount } = req.body;
  try {
    const payment = await Payment.create({ amount });
    res.status(201).json({ message: "appartement created", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addPayment;
