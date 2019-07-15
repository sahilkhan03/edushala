"use strict";

let express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Homepage");
});

module.exports = router;
