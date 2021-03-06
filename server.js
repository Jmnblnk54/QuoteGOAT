/* eslint-disable no-unused-vars */
// Dependencies add sequel and sequelize, handlebars
// =============================================================
const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname,"/public")));

// Use sessions to track of user's login status
app.use(session({ secret: "GoAts4D4yz", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});
