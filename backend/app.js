const express = require("express");
const app = express();
const connection = require("./src/database/connection");
const authRoutes = require("./src/routes/auth.routes");
const resetPasswordRouter = require("./src/routes/resetPassword.routes");
const forgetPasswordRouter = require("./src/routes/forgetPassword.routes");
const activeEmailRouter = require("./src/routes/activeEmail.routes");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/auth", resetPasswordRouter);
app.use("/auth", forgetPasswordRouter);
app.use("/auth", activeEmailRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
