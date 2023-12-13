const Payment = require("../../model/payment.schema");

const updatePayment = async (req, res) => {
  const { amount } = req.body;
  try {
    const { id } = req.params;
    const updateFields = { amount };
    const findPayment = await Payment.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });
    if (!findPayment) {
      return res.status(404).json({ message: "no payment found" });
    }
    return res.status(200).json({ message: "payment updated", findPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updatePayment
