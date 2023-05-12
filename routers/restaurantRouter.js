const restaurantRouter = require("express").Router();
const RestaurantController = require("../controllers/restaurant.controller");

restaurantRouter.get("/", RestaurantController.getAllRestaurants);

module.exports = restaurantRouter;
