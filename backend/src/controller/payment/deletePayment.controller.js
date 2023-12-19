const Payment = require("../../model/payment.schema");
const Apartement = require("../../model/apartment.schema");

const deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findById(id).populate("apartment");
    if (!payment) {
      return res.status(404).json({ message: "No payment found" });
    }

    const deletedPayment = await Payment.findByIdAndDelete(id);

    if (!deletedPayment) {
      return res.status(404).json({ message: "No payment found" });
    }
    const apartmentId = payment.apartment._id;
    await Apartement.findByIdAndUpdate(
      apartmentId,
      { $set: { reserved: false } },
      { new: true }
    );

    res.status(200).json({ message: "Payment deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deletePayment;
