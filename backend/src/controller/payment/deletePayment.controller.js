const Payment = require("../../model/payment.schema");

const deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPayment = await Payment.findByIdAndDelete(id);
    if (!deletedPayment) {
      return res.status(404).json({ message: "No payment found" });
    }
    res.status(200).json({ message: "payment deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deletePayment;
