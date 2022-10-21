const router = require("express").Router();

router.get("/index", (req, res) => {
  res.json("HEWWO");
});

module.exports = router;
