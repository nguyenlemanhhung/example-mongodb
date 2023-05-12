const restaurantRouter = require("express").Router();
const RestaurantController = require("../controllers/restaurant.controller");

restaurantRouter.get("/", RestaurantController.getAllRestaurants);
restaurantRouter.get(
  "/zipcode/:code",
  RestaurantController.getRestaurantByZipCode
);
restaurantRouter.get(
  "/cuisine/:name",
  RestaurantController.getRestaurantByCuisine
);
restaurantRouter.get(
  "/borough/:name",
  RestaurantController.getRestaurantByBorough
);

restaurantRouter.get(
  "/chickeninmanhattan",
  RestaurantController.getRestaurantByChickenInManhattan
);

//tìm nhà hàng có trên 3 review
restaurantRouter.get(
  "/has3review",
  RestaurantController.getRestaurantHas3Review
);
// nhà hàng có đánh giá điểm B
restaurantRouter.get("/hasgradeb", RestaurantController.getRestaurantHasGradeB);

module.exports = restaurantRouter;
