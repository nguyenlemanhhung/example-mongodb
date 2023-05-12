const { connectDbRestaurant } = require("../connectDB");

class RestaurantController {
  async getAllRestaurants(req, res) {
    try {
      console.log("GET ALL");
      const result = await connectDbRestaurant().find({}).toArray();
      return res.status(200).json({ restaurants: result });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new RestaurantController();
