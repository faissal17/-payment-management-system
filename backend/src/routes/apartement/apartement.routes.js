const express = require("express");
const apartementRoutes = express.Router();
const userMiddleware = require("../../middleware/auth.middleware");

const createApartement = require("../../controller/apartment/addApartment.controller");
const {
  getAllApartement,
  getApartmentByID,
} = require("../../controller/apartment/getApartment.controller");
const updateApartement = require("../../controller/apartment/updateApartement.controller");
const deleteApartment = require("../../controller/apartment/deleteApartement.controller");

apartementRoutes.route("/").post(createApartement).get(getAllApartement);

apartementRoutes
  .route("/:id")
  .get(getApartmentByID)
  .put(updateApartement)
  .delete(deleteApartment);

module.exports = apartementRoutes;
