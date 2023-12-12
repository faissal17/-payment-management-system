const express = require("express");
const apartementRoutes = express.Router();

const createApartement = require("../../controller/apartment/addApartment.controller");
const {getAllApartement,getApartmentByID} = require("../../controller/apartment/getApartment.controller");
const updateApartement = require('../../controller/apartment/updateApartement.controller')

apartementRoutes.post("/", createApartement);
apartementRoutes.get("/", getAllApartement);
apartementRoutes.get("/:id", getApartmentByID);
apartementRoutes.put("/:id", updateApartement);


module.exports = apartementRoutes;
