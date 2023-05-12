const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://nohssiw1905:ailopdu281186.@mindxnodejs.b99ioni.mongodb.net/";

const client = new MongoClient(uri);

async function connectDatabase() {
  try {
    await client.connect();
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
}

const connectDbRestaurant = () => {
  return client.db("session5").collection("restaurants");
};

module.exports = { connectDatabase, connectDbRestaurant };
