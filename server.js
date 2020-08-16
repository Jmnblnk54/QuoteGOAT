/* eslint-disable no-unused-vars */
// Dependencies add sequel and sequelize, handlebars
// =============================================================
const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starts the server to begin listening
// =============================================================

db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});
