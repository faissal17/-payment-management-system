const mongoose = require("mongoose");

const url =
  "mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/payment?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("connected to database");
});

module.exports = mongoose;
