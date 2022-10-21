const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("TESTING FROM USERROUTES");
});

module.exports = router;
