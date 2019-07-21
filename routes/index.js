"use strict";

let express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home | Edushala" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About | Edushala" });
});

module.exports = router;
