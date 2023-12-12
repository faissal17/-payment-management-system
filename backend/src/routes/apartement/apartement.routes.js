const express = require("express");
const apartementRoutes = express.Router();

const createApartement = require("../../controller/apartment/addApartment.controller");
const getAllApartement = require('../../controller/apartment/getApartment.controller')

apartementRoutes.post("/",createApartement);
apartementRoutes.get("/",getAllApartement)


module.exports = apartementRoutes;
