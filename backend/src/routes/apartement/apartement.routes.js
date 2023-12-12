const express = require("express");
const apartementRoutes = express.Router();

const createApartement = require("../../controller/apartment/addApartment.controller");
const {getAllApartement,getApartmentByID} = require("../../controller/apartment/getApartment.controller");

apartementRoutes.post("/", createApartement);
apartementRoutes.get("/", getAllApartement);
apartementRoutes.get("/:id", getApartmentByID);


module.exports = apartementRoutes;
