const express = require("express");
const router = express.Router();

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    res.send("respond with a resource");
  })
  /* part 2: Challenge - add new route */
  .get("/cool", function (req, res, next) {
    res.send("you are so cool");
  });

module.exports = router;
