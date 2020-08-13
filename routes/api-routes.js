const db = require("../models");
const sequelize = require("sequelize");

module.exports = function (app) {
  // eslint-disable-next-line no-unused-vars
  app.get("/api/top_quotes", function (req, res) {
    db.Vote.findAll({
      limit: 10,
      order: [["numberOfVotes", "DESC"]],
    }).then(function (dbVote) {
      res.json(dbVote);
    });
  });


  app.get("/api/random_quote", function (req, res) {
    db.Quote.findAll({
      order: [[sequelize.fn("RAND", "")]],
      limit: 1
    }).then(function (dbQuote) {
      res.json(dbQuote);
    });
  });

  // Route to get all quotes
  app.get("/api/quotes", function (req, res) {
    db.Quote.findAll({}).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all posts from user
  app.get("/api/quotes/:user", function (req, res) {
    db.Quote.findAll({
      where: {userID: req.params.userID}
    }).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
      console.log("Here is a list of all users:", dbUser);
    });
  });

  // Route to get all categories
  app.get("/api/categories", function (req, res) {
    db.Category.findAll({}).then(function (dbCategories) {
      res.json(dbCategories);
      console.log("Here is a list of all categories:", dbCategories);
    });
  });
};

