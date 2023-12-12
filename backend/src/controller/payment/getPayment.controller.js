const Payment = require("../../model/payment.schema");

const getAllPayment = async (req, res) => {
  try {
    const AllPayment = await Payment.find();
    if (!AllPayment) {
      res.status(404).json({ message: "no payment found" });
    }
    res.status(404).json({ message: AllPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPaymentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const paymentById = await Payment.findById(id);
    if (!paymentById) {
      res.status(404).json({ message: "no payment found" });
    }
    res.status(404).json({ message: paymentById });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPayment, getPaymentByID };
