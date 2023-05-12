const { connectDbRestaurant } = require("../connectDB");

class RestaurantController {
  //get all and get by page
  async getAllRestaurants(req, res) {
    const PAGE_SIZE = 2;
    var page = req.query.page;
    if (page) {
      const pageNumber = parseInt(page);
      if (pageNumber < 1) {
        pageNumber = 1;
      }
      var skipNumberPost = (pageNumber - 1) * PAGE_SIZE;
      const result = await connectDbRestaurant()
        .find({})
        .skip(skipNumberPost)
        .limit(PAGE_SIZE)
        .toArray();
      if (result) {
        // connectCollection.countDocuments({}).then((total) => {
        //   var totalPages = Math.ceil(total / PAGE_SIZE);
        //   console.log("totalPages:", totalPages);
        // });

        res.status(200).json({ restaurants: result });
      } else {
        res.status(404).send("posts not found");
      }
    } else {
      const result = await connectDbRestaurant().find({}).toArray();
      try {
        return res.status(200).json({ restaurants: result });
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }

  //get by zipcode( theo zip code)
  async getRestaurantByZipCode(req, res) {
    var inputCode = req.params.code;
    const result = await connectDbRestaurant()
      .find({ "address.zipcode": inputCode })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }

  //get by cuisine (theo ẩm thực)
  async getRestaurantByCuisine(req, res) {
    var inputName = req.params.name;
    const result = await connectDbRestaurant()
      .find({ cuisine: inputName })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }

  //get by borough (theo quận)
  async getRestaurantByBorough(req, res) {
    var inputName = req.params.name;
    console.log("inputName:", inputName);
    const result = await connectDbRestaurant()
      .find({ borough: inputName })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }

  // nhà hàng ẩm thực "gà" ở quận "Manhattan"
  async getRestaurantByChickenInManhattan(req, res) {
    const result = await connectDbRestaurant()
      .find({ cuisine: "Manhattan", cuisine: "Chicken" })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }

  // nhà hàng có trên 3 đánh giá
  async getRestaurantHas3Review(req, res) {
    const result = await connectDbRestaurant()
      .find({ grades: { $gt: { $size: 3 } } })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }

  // nhà hàng có đánh giá điểm B
  async getRestaurantHasGradeB(req, res) {
    const result = await connectDbRestaurant()
      .find({ "grades.grade": "B" })
      .toArray();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json("restaurant not found");
    }
  }
}

module.exports = new RestaurantController();
