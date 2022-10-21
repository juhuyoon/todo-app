const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const controllers = require("./controllers");

const Model = require("./models");

const PORT = process.env.PORT || 5500;

app.use("/api", controllers);

// Just for memes and practice
// app.get("/", (req, res) => {
//   res.json("hi");
// });
// app.get("/api/dataOne", (req, res) => {
//   res.json({ data: "Some data" });
// });
// app.get("/api/dataTwo", (req, res) => {
//   res.json({ data: "Other Data" });
// });

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("I'm running");
  });
});
