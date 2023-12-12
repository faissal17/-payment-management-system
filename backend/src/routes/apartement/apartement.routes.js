const express = require("express");
const apartementRoutes = express.Router();

const ApartementController = require("../../controller/apartment/apartment.controller");

apartementRoutes.post("/create", ApartementController.create);

module.exports = apartementRoutes;
