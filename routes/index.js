"use strict";

let express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home | Edushala" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About | Edushala" });
});

router.get("/services", (req, res) => {
  res.render("services", { title: "Services | Edushala" });
});

router.get("/pricing", (req, res) => {
  res.render("pricing", { title: "Pricing | Edushala" });
});

module.exports = router;
