const rootRouter = require("express").Router();
const restaurantRouter = require("./restaurantRouter");

rootRouter.use("/restaurant", restaurantRouter);

module.exports = rootRouter;
