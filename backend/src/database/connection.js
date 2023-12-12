const mongoose = require("mongoose");

const url =
  "mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/payment?retryWrites=true&w=majority";
mongoose.connect(url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

module.exports = mongoose;
