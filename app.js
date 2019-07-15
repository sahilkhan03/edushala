"use strict";

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

//Require all routes
let routes = require("./routes/index");

//Use all routes
app.use("/", routes);
app.get("*", (req, res) =>
  res.render("404", { title: "404 Not Found | Edushala" })
);
