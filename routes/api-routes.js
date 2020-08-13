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

  //   app.get("/api/top_categories", function(req,res){

  //   });

  app.get("/api/random_quote", function (req, res) {
    db.Quote.findAll({
      order: [[sequelize.fn("RAND", "")]],
      limit: 1
    }).then(function (dbQuote) {
      res.json(dbQuote);
    });
  });
};
