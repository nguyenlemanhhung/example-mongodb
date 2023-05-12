const express = require("express");
const app = express();
const { connectDatabase } = require("./connectDB");
const rootRouter = require("./routers");

connectDatabase().then(() => {
  console.log("done!!!");
});

app.use(rootRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on http://localhost/${port}`);
});
