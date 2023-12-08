const express = require("express");
const app = express();
const connection = require("../backend/src/database/connection");
const authRoutes = require("../backend/src/routes/auth.routes");

const bodyParser = require('body-parser')


const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());

app.use("/auth", authRoutes);

const port = process.env.PORT ||3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
