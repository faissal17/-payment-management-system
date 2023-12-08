const express = require("express");
const app = express();
const connection = require("./database/connection");
const authRoutes = require("./routes/auth.routes");

const dotenv = require("dotenv");

dotenv.config();

app.use("/auth", authRoutes);

const port = process.env.PORT ||3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
