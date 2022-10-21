const router = require("express").Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  res.json("TESTING FROM USERROUTES");
});

router.post("/", async (req, res) => {
  try {
    // What the user's input looks like
    console.log(req.body);
    const userData = await User.create(req.body);
    res.status(200).json({ msg: "we got your information!", userData });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
