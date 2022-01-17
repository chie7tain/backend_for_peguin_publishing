import express from "express";

const router = express.Router();
import {
  getRestaurant,
  getAllRestaurants,
  createRestaurant,
  getRestaurantsByReg,
  getRestaurantsByCuisine,
  getRestaurantsByBorough,
  getRestaurantsByBoroughAndCuisine,
  getRestaurantsByScore,
  getRestaurantsByDate,
  getRestaurantsByDateAndScore,
  getRestaurantsByCoord,
  getRestaurantsByName,
  getRestaurantsByNameDesc,
  getRestaurantsByCuisineAndBorough,
  getRestaurantsByStreet,
} from "../controllers/restaurantController";

router.route("/").get(getAllRestaurants);
router.route("/restaurantByReg").get(getRestaurantsByReg);
router.route("/restaurantByCuisine").get(getRestaurantsByCuisine);
router.route("/:id").get(getRestaurant);
module.exports = router;
