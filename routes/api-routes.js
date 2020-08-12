// Dependancies
const db = require("../models");

// Routes
module.exports = function (app) {
  // Route to get all quotes
  app.get("/api/all-quotes", function (req, res) {
    db.Quote.findAll({}).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all posts from user
  app.get("/api/user-quotes", function (req, res) {
    db.Quote.findAll({
      where: {userID: req.params.User}
    }).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all users
  app.get("/api/all-users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
      console.log("Here is a list of all users:", dbUser);
    });
  });

  // Route to get all categories
  app.get("/api/all-categories", function (req, res) {
    db.Category.findAll({}).then(function (dbCategories) {
      res.json(dbCategories);
      console.log("Here is a list of all categories:", dbCategories);
    });
  });


};


