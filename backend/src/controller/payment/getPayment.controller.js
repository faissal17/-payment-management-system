const Payment = require("../../model/payment.schema");

const getAllPayment = async (req, res) => {
  try {
    const allPayment = await Payment.find();
    if (!allPayment || allPayment.length === 0) {
      return res.status(404).json({ message: "No payments found" });
    }
    res.status(200).json(allPayment);
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
